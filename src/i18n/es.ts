export const es = {
  meta: {
    title: 'Matus Behun | Full Stack Developer · React · TypeScript · IA',
    description:
      'Desarrollador Full Stack: React, TypeScript, Node.js, Python e IA aplicada. Busco empleo en España, República Checa o Eslovaquia, en remoto o presencial.',
    ogLocale: 'es_ES',
  },
  nav: {
    projects: 'Proyectos',
    about: 'Sobre mí',
    stack: 'Stack',
    contact: 'Contacto',
    label: 'Navegación principal',
    langLabel: 'Cambiar idioma',
  },
  hero: {
    lead: 'Desarrollador Full Stack. Construyo productos web con React, TypeScript, Node.js y PostgreSQL, y uso la IA donde ahorra tiempo. Lo que tiene que ser exacto lo dejo en código y SQL.',
    status:
      'Busco mi primer puesto como desarrollador en España, República Checa o Eslovaquia, en remoto o presencial.',
    cvPrimary: 'Descargar CV en español',
    cvSecondary: 'CV en inglés',
  },
  projects: {
    title: 'Proyectos',
    clientsTitle: 'Webs para clientes',
    clientsIntro: 'Tres webs en producción para negocios de Tenerife.',
    demo: 'Ver demo',
    tryDemo: 'Probar la demo',
    visit: 'Ver web',
    code: 'Código',
    stackLabel: 'Tecnologías',
    items: {
      presupro: {
        description:
          'SaaS de presupuestos de obra para Jaro Reformas, que sustituye a los presupuestos en Word. Crea, numera y exporta presupuestos a PDF, y cada empresa ve solo sus datos.',
        metric: '53 tests en Vitest, ~96 % de cobertura de la lógica de negocio.',
      },
      ragdocs: {
        description:
          'Asistente que responde preguntas sobre la documentación técnica de una fábrica a partir de sus PDFs, citando documento y página. Si no encuentra la respuesta, dice que no lo sabe. Todo corre en local: ningún dato sale del equipo.',
        metric: '',
      },
      mymoney: {
        description:
          'Mi app de finanzas personales. Le mando un mensaje, un audio o la foto de un ticket por Telegram y el gasto queda guardado y clasificado, con un panel web para verlo todo.',
        metric: '',
      },
      magnum: {
        description:
          'Barbería y estudio de tatuaje en Puerto de la Cruz. Mi primer proyecto para un cliente real.',
        metric: '',
      },
      dalai: {
        description: 'Instalador de climatización en Tenerife, con SEO técnico y contacto por WhatsApp.',
        metric: '',
      },
      rendex: {
        description: 'Estudio de renders 3D en La Orotava, con portfolio y formulario de presupuesto.',
        metric: '',
      },
    },
  },
  about: {
    title: 'Sobre mí',
    photoAlt: 'Matus Behun',
    paragraphs: [
      'Aprendí desarrollo web por mi cuenta y con el bootcamp Full Stack de ConquerBlocks mientras trabajaba en obra, y lo primero que construí fue para la empresa de mi familia. Hoy tengo proyectos en producción y webs para clientes reales en Tenerife.',
      'Trabajo el frontend con React y TypeScript, y el backend con Node.js, Python y PostgreSQL. Integro modelos de Anthropic, Gemini y OpenAI, y también los ejecuto en local con Ollama. Escribo tests con Vitest y uso Claude Code y Cursor para avanzar más rápido.',
      'Hablo español y eslovaco como lenguas nativas, e inglés y checo a nivel C1. Soy ciudadano de la UE y puedo cambiar de ciudad.',
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Frontend', items: 'TypeScript, React, Astro, Tailwind CSS' },
      { name: 'Backend', items: 'Node.js, Express, Python, FastAPI' },
      { name: 'Datos', items: 'PostgreSQL, Supabase, Qdrant' },
      { name: 'IA', items: 'APIs de Anthropic, Gemini y OpenAI, Ollama, RAG, n8n' },
      { name: 'Tests y despliegue', items: 'Vitest, Git, Vercel, Claude Code, Cursor' },
    ],
  },
  services: {
    title: 'Webs para negocios',
    intro:
      'Además de buscar empleo, sigo haciendo webs para negocios locales. Si tienes uno en Tenerife, puedo ayudarte con:',
    items: [
      'Una web rápida, adaptada al móvil y preparada para Google, con tu dominio.',
      'Automatizaciones con n8n: avisos al correo o WhatsApp y tareas que hoy haces a mano.',
      'Cambios y mantenimiento después de la entrega.',
    ],
  },
  contact: {
    title: 'Contacto',
    intro: 'Si tienes una oferta de trabajo o un proyecto, escríbeme. Respondo en uno o dos días.',
    whatsapp: 'WhatsApp',
    copy: 'Copiar correo',
    copied: 'Copiado',
    whatsappMessage: 'Hola Matus, he visto tu web y me gustaría hablar contigo.',
    form: {
      title: 'O déjame un mensaje aquí',
      name: 'Nombre',
      email: 'Correo electrónico',
      type: 'Motivo',
      types: { job: 'Oferta de trabajo', web: 'Proyecto web', other: 'Otro' },
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      ok: 'Mensaje enviado. Te responderé lo antes posible.',
      error: 'No se pudo enviar. Escríbeme a matusbehun03@gmail.com o por WhatsApp.',
      invalid: 'Revisa los campos marcados.',
      privacy: 'Usaré tus datos solo para responder a tu mensaje. Más información en la ',
      privacyLink: 'política de privacidad',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    skip: 'Saltar al contenido',
    privacy: 'Política de privacidad',
  },
};
