import type { Lang } from './ui';

/** Ruta de la política de privacidad en cada idioma. */
export const privacyPaths: Record<Lang, string> = {
  es: '/privacidad/',
  en: '/en/privacy/',
};

export function privacyPath(lang: Lang): string {
  return privacyPaths[lang];
}

interface Section {
  title: string;
  paragraphs: string[];
}

interface PrivacyText {
  title: string;
  description: string;
  updated: string;
  back: string;
  sections: Section[];
}

const EMAIL = 'matusbehun03@gmail.com';

export const privacyText: Record<Lang, PrivacyText> = {
  es: {
    title: 'Política de privacidad | Matus Behun',
    description: 'Cómo trato los datos que envías por el formulario de contacto de matdevs.com.',
    updated: 'Última actualización: noviembre de 2026',
    back: 'Volver al inicio',
    sections: [
      {
        title: 'Responsable del tratamiento',
        paragraphs: [`Matus Behun, Los Realejos (Santa Cruz de Tenerife), España. Contacto: ${EMAIL}.`],
      },
      {
        title: 'Qué datos recojo',
        paragraphs: [
          'Solo los que escribes en el formulario de contacto: nombre, correo electrónico, tipo de consulta y mensaje. Esta web no usa cookies de seguimiento ni herramientas de analítica.',
        ],
      },
      {
        title: 'Para qué los uso',
        paragraphs: [
          'Para responder a tu mensaje y, si procede, mantener la conversación que inicias (por ejemplo, sobre una oferta de trabajo o un proyecto). No los uso para enviarte publicidad.',
        ],
      },
      {
        title: 'Base legal',
        paragraphs: [
          'Tu consentimiento, que das al enviar el formulario (art. 6.1.a del RGPD). Puedes retirarlo cuando quieras escribiéndome al correo indicado.',
        ],
      },
      {
        title: 'Quién más accede a ellos',
        paragraphs: [
          'Los mensajes se envían a través de Formspree, un servicio que me reenvía el formulario por correo, y la web está alojada en Vercel. Ambos pueden tratar los datos fuera de la Unión Europea con las garantías previstas en el RGPD (cláusulas contractuales tipo). No cedo tus datos a nadie más.',
        ],
      },
      {
        title: 'Cuánto tiempo los guardo',
        paragraphs: [
          'Mientras dure la conversación y, como máximo, un año después del último contacto. Después los borro.',
        ],
      },
      {
        title: 'Tus derechos',
        paragraphs: [
          `Puedes pedir acceso, rectificación, supresión, oposición, limitación del tratamiento o portabilidad de tus datos escribiendo a ${EMAIL}. Si crees que no se han respetado tus derechos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy | Matus Behun',
    description: 'How I handle the data you send through the contact form on matdevs.com.',
    updated: 'Last updated: November 2026',
    back: 'Back to home',
    sections: [
      {
        title: 'Data controller',
        paragraphs: [`Matus Behun, Los Realejos (Santa Cruz de Tenerife), Spain. Contact: ${EMAIL}.`],
      },
      {
        title: 'What data I collect',
        paragraphs: [
          'Only what you type in the contact form: name, email address, type of enquiry and message. This site uses no tracking cookies or analytics tools.',
        ],
      },
      {
        title: 'What I use it for',
        paragraphs: [
          'To reply to your message and, where relevant, continue the conversation you start (for example, about a job offer or a project). I do not use it to send you marketing.',
        ],
      },
      {
        title: 'Legal basis',
        paragraphs: [
          'Your consent, given when you submit the form (Art. 6(1)(a) GDPR). You can withdraw it at any time by emailing me.',
        ],
      },
      {
        title: 'Who else can access it',
        paragraphs: [
          'Messages are sent through Formspree, a service that forwards the form to my email, and the site is hosted on Vercel. Both may process data outside the European Union under the safeguards set out in the GDPR (standard contractual clauses). I do not share your data with anyone else.',
        ],
      },
      {
        title: 'How long I keep it',
        paragraphs: [
          'For as long as the conversation lasts and, at most, one year after the last contact. After that I delete it.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          `You can request access, rectification, erasure, objection, restriction of processing or portability of your data by emailing ${EMAIL}. If you believe your rights have not been respected, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
        ],
      },
    ],
  },
};
