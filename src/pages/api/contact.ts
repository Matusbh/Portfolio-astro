import type { APIRoute } from 'astro';

// Se ejecuta en el servidor (Vercel). El endpoint de Formspree vive en una
// variable de entorno y nunca llega al navegador.
export const prerender = false;

const TYPES = ['job', 'web', 'other'];

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export const POST: APIRoute = async ({ request }) => {
  // Solo se acepta desde nuestro propio sitio
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (origin && host && new URL(origin).host !== host) {
    return json({ error: 'forbidden' }, 403);
  }

  const endpoint = import.meta.env.FORMSPREE_ENDPOINT;
  if (!endpoint) return json({ error: 'not_configured' }, 503);

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'invalid' }, 400);
  }

  // Honeypot: se responde OK para no dar pistas al bot
  if (typeof data._gotcha === 'string' && data._gotcha.trim() !== '') {
    return json({ ok: true }, 200);
  }

  const name = String(data.name ?? '').trim();
  const email = String(data.email ?? '').trim();
  const type = String(data.type ?? '');
  const message = String(data.message ?? '').trim();

  const valid =
    name.length >= 2 &&
    name.length <= 100 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    email.length <= 200 &&
    TYPES.includes(type) &&
    message.length >= 10 &&
    message.length <= 2000;
  if (!valid) return json({ error: 'invalid' }, 400);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: `matdevs.com · ${type} · ${name}`,
        type,
        message,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return json({ error: 'upstream' }, 502);
  } catch {
    return json({ error: 'upstream' }, 502);
  }

  return json({ ok: true }, 200);
};
