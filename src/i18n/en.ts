import type { es } from './es';

export const en: typeof es = {
  meta: {
    title: 'Matus Behun | Full Stack Developer · React · TypeScript · AI',
    description:
      'Full Stack developer: React, TypeScript, Node.js, Python and applied AI. Looking for a job in Spain, the Czech Republic or Slovakia, remote or on site.',
    ogLocale: 'en_GB',
  },
  nav: {
    projects: 'Projects',
    about: 'About',
    stack: 'Stack',
    contact: 'Contact',
    label: 'Main navigation',
    langLabel: 'Change language',
  },
  hero: {
    lead: 'Full Stack developer. I build web products with React, TypeScript, Node.js and PostgreSQL, and use AI where it saves time. Anything that has to be exact stays in code and SQL.',
    status:
      "I'm looking for my first developer role in Spain, the Czech Republic or Slovakia, remote or on site.",
    cvPrimary: 'Download CV in English',
    cvSecondary: 'CV in Spanish',
  },
  projects: {
    title: 'Projects',
    clientsTitle: 'Client websites',
    clientsIntro: 'Three live websites for businesses in Tenerife.',
    demo: 'View demo',
    tryDemo: 'Try the demo',
    visit: 'Visit site',
    code: 'Code',
    stackLabel: 'Technologies',
    items: {
      presupro: {
        description:
          'Construction quote SaaS for Jaro Reformas, replacing quotes written in Word. It creates, numbers and exports quotes to PDF, and each company only sees its own data.',
        metric: '53 Vitest tests, ~96% coverage of the business logic.',
      },
      ragdocs: {
        description:
          "Assistant that answers questions about a factory's technical documentation from its PDFs, citing document and page. If it can't find the answer, it says it doesn't know. Everything runs locally: no data leaves the machine.",
        metric: '',
      },
      mymoney: {
        description:
          'My personal finance app. I send it a message, a voice note or a photo of a receipt on Telegram and the expense is saved and categorised, with a web dashboard to see everything.',
        metric: '',
      },
      magnum: {
        description:
          'Barbershop and tattoo studio in Puerto de la Cruz. My first project for a real client.',
        metric: '',
      },
      dalai: {
        description: 'Air conditioning installer in Tenerife, with technical SEO and WhatsApp contact.',
        metric: '',
      },
      rendex: {
        description: '3D rendering studio in La Orotava, with a portfolio and a quote request form.',
        metric: '',
      },
    },
  },
  about: {
    title: 'About',
    photoAlt: 'Matus Behun',
    paragraphs: [
      "I taught myself web development, together with the Full Stack bootcamp at ConquerBlocks, while working in construction, and the first thing I built was for my family's company. Today I have projects in production and websites for real clients in Tenerife.",
      'I build frontends with React and TypeScript, and backends with Node.js, Python and PostgreSQL. I integrate models from Anthropic, Gemini and OpenAI, and also run them locally with Ollama. I write tests with Vitest and use Claude Code and Cursor to move faster.',
      'I speak Spanish and Slovak natively, and English and Czech at C1 level. I hold EU citizenship and I am open to relocating.',
    ],
  },
  stack: {
    title: 'Stack',
    groups: [
      { name: 'Frontend', items: 'TypeScript, React, Astro, Tailwind CSS' },
      { name: 'Backend', items: 'Node.js, Express, Python, FastAPI' },
      { name: 'Data', items: 'PostgreSQL, Supabase, Qdrant' },
      { name: 'AI', items: 'Anthropic, Gemini and OpenAI APIs, Ollama, RAG, n8n' },
      { name: 'Testing and deployment', items: 'Vitest, Git, Vercel, Claude Code, Cursor' },
    ],
  },
  services: {
    title: 'Websites for businesses',
    intro:
      'Alongside my job search, I still build websites for local businesses. If you run one in Tenerife, I can help with:',
    items: [
      'A fast, mobile-friendly website ready for Google, on your own domain.',
      'Automations with n8n: alerts to your email or WhatsApp and tasks you now do by hand.',
      'Changes and maintenance after delivery.',
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'If you have a job offer or a project, write to me. I reply within a day or two.',
    whatsapp: 'WhatsApp',
    copy: 'Copy email',
    copied: 'Copied',
    whatsappMessage: "Hi Matus, I saw your website and I'd like to talk.",
    form: {
      title: 'Or leave me a message here',
      name: 'Name',
      email: 'Email address',
      type: 'Reason',
      types: { job: 'Job offer', web: 'Web project', other: 'Other' },
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: "Message sent. I'll reply as soon as I can.",
      error: 'Could not send. Email me at matusbehun03@gmail.com or use WhatsApp.',
      invalid: 'Check the highlighted fields.',
      privacy: "I'll only use your data to reply to your message. More information in the ",
      privacyLink: 'privacy policy',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    skip: 'Skip to content',
    privacy: 'Privacy policy',
  },
};
