import type { es } from './es';

export const en: typeof es = {
  meta: {
    title: 'Matus Behun | Full Stack Developer in Tenerife',
    description:
      'Junior Full Stack developer: React, TypeScript, Node.js and n8n. Fast websites for local businesses in Tenerife and projects for companies.',
    ogLocale: 'en_GB',
  },
  nav: {
    projects: 'Projects',
    services: 'Services',
    stack: 'Stack',
    contact: 'Contact',
    about: 'About',
    label: 'Main navigation',
    langLabel: 'Change language',
  },
  hero: {
    available: 'Available for work',
    availableShort: 'Available',
    greeting: "Hi, I'm Matus.",
    photoAlt: 'Portrait of Matus Behun',
    role: 'Full Stack Developer',
    intro1: ' Frontend with ',
    frontend: 'React and TypeScript',
    intro2: '. Backend with ',
    backend: 'Node.js, REST APIs and SQL and NoSQL databases',
    intro3: '. Automation with ',
    automation: 'n8n and AI APIs',
    intro4: '.',
    ctaProjects: 'View projects',
    ctaWeb: 'I need a website',
    cv: 'Download CV',
  },
  projects: {
    title: 'Projects',
    metric: 'In numbers',
    clientsTitle: 'Real clients',
    clientsIntro: 'Websites delivered to businesses in Tenerife.',
    demo: 'View demo',
    tryDemo: 'Try demo',
    visit: 'Visit site',
    github: 'GitHub',
    tagClient: 'Real client',
    tagPersonal: 'Own project',
    stackLabel: 'Technologies',
    items: {
      presupro: {
        description:
          'Construction quote SaaS for Jaro Reformas. Creates, numbers and exports quotes to PDF; each company only sees its own data. Built with AI assistance (Claude Code).',
        metric: '53 tests · ~96% coverage in lib/',
      },
      snaprime: {
        description:
          'Paste a website URL and Claude builds the brand profile and editable ads, stored in PostgreSQL.',
        metric: '',
      },
      autodash: {
        description:
          'Real-time news dashboard. React calls an n8n webhook that queries NewsAPI.',
        metric: '',
      },
      magnum: {
        description:
          'Website for a barbershop and tattoo studio in Puerto de la Cruz, with gallery and bookings. My first freelance project.',
        metric: '',
      },
      dalai: {
        description:
          'Corporate website for an air conditioning installer in Tenerife, with technical SEO and a WhatsApp button.',
        metric: '',
      },
      rendex: {
        description:
          'Website for a 3D rendering studio in La Orotava, with portfolio and a quote request form.',
        metric: '',
      },
    },
  },
  services: {
    title: 'Services',
    intro: 'For businesses that want a website that works.',
    items: [
      {
        title: 'Websites for local businesses',
        text: 'Fast, mobile-friendly websites. They include technical SEO (Schema.org, Open Graph, canonical tags), your own domain and deployment.',
      },
      {
        title: 'Automations with n8n',
        text: 'Forms that notify you by email or WhatsApp, automatic alerts and repetitive tasks you now do by hand.',
      },
      {
        title: 'Maintenance and changes',
        text: 'Content updates, tweaks and improvements after delivery. You ask, I do it.',
      },
    ],
    processTitle: 'How we work',
    steps: [
      { title: 'Contact', text: 'You tell me what you need, by WhatsApp, email or the form.' },
      { title: 'Proposal', text: 'I send a clear quote with scope and timeline.' },
      { title: 'Development', text: 'I build the site and you review progress.' },
      { title: 'Delivery', text: 'I publish it on your domain and explain how it works.' },
    ],
    cta: 'Request a quote',
  },
  stack: {
    title: 'Tech stack',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      automation: 'Automation and AI',
      tools: 'Tools',
    },
    logoAlt: 'Logo of',
  },
  languages: {
    title: 'Languages',
    flagAlt: 'Flag of',
    items: [
      { name: 'Spanish', level: 'C2 · Native', flag: 'es', country: 'Spain' },
      { name: 'Slovak', level: 'C2 · Native', flag: 'sk', country: 'Slovakia' },
      { name: 'Czech', level: 'C1 · Advanced', flag: 'cz', country: 'Czech Republic' },
      { name: 'English', level: 'C1 · Advanced', flag: 'gb', country: 'United Kingdom' },
    ],
    note: 'I can work in international teams or with clients in English, Czech or Slovak.',
  },
  contact: {
    title: 'Contact',
    intro:
      'Have a job offer or need a website? Write to me on the channel you prefer. I reply as soon as I can.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    copy: 'Copy',
    copied: 'Copied',
    whatsappMessage: "Hi Matus, I saw your website and I'd like to talk about a project.",
    form: {
      name: 'Name',
      email: 'Email address',
      type: 'Type of enquiry',
      types: { job: 'Job offer', web: 'Web project', other: 'Other' },
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: "Message sent. I'll reply as soon as I can.",
      error: 'Could not send. Email me at matusbehun03@gmail.com or use WhatsApp.',
      invalid: 'Please check the form fields.',
    },
  },
  about: {
    title: 'About me',
    photoAlt: 'Matus Behun smiling',
    p1a: 'I come from the construction industry, where I have worked for years. Alongside it I learned ',
    p1b: 'web development',
    p1c: ' through the Full Stack bootcamp at ',
    p1d: 'ConquerBlocks',
    p1e: ' and on my own. I have no computer science degree. I have projects in production and real clients in Tenerife.',
    p2a: 'I build frontends with React and TypeScript, and backends with Node.js, REST APIs and SQL and NoSQL databases. I automate processes with n8n and AI APIs. I use Claude Code and Cursor to move faster.',
    p3a: "I'm looking for my first position as a junior Full Stack developer in Spain, the Czech Republic or Slovakia, remote or on site.",
    p4a: 'I speak Spanish, Slovak, English and Czech. I hold EU citizenship and I am open to relocating.',
  },
  footer: {
    rights: 'All rights reserved.',
    skip: 'Skip to content',
  },
};
