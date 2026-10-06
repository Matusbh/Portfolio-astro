// Datos que no se traducen: enlaces, imágenes y etiquetas de stack.
// Los textos (problema, solución) están en src/i18n/*.ts, indexados por `id`.
export interface Project {
  id: string;
  title: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export const featured: Project = {
  id: 'presupro',
  title: 'PresuPro',
  image: '/PresuPro.png',
  stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Tailwind CSS'],
  github: 'https://github.com/Matusbh/Saas-Presupuestos',
  demo: 'https://saas-presupuestos.vercel.app/',
};

export const projects: Project[] = [
  {
    id: 'snaprime',
    title: 'Snaprime',
    image: '/snaprime-miniatura.webp', // PLACEHOLDER: sustituir por captura (mismo nombre de archivo)
    stack: [
      'TanStack Start',
      'React',
      'TypeScript',
      'Anthropic API',
      'PostgreSQL',
    ],
    github: 'https://github.com/Matusbh/App_anuncios',
    demo: 'https://tanstack-start-app.matusbh-dev.workers.dev',
  },
  {
    id: 'autodash',
    title: 'AutoDash',
    image: '/autodash-miniatura.webp',
    stack: ['React', 'Tailwind CSS', 'n8n'],
    github: 'https://github.com/Matusbh/News-N8N',
    demo: 'https://news-n8-n.vercel.app/',
  },
];

export const clients: Project[] = [
  {
    id: 'magnum',
    title: 'Magnum Barbershop',
    image: '/Miniatura-magnum.png',
    stack: ['Astro', 'Tailwind CSS'],
    github: 'https://github.com/Matusbh/Magnum-Barbershop',
    demo: 'https://www.magnum-barbershop.es/',
  },
  {
    id: 'dalai',
    title: 'Climatizaciones Dalai',
    image: '/clima_mini.png',
    stack: ['Astro', 'SEO técnico'],
    github: 'https://github.com/Matusbh/ClimatizacionesDalai',
    demo: 'https://climatizaciones-dalai.vercel.app',
  },
  {
    id: 'rendex',
    title: 'Rendex',
    image: '/rendex-miniatura.webp',
    stack: ['Astro', 'TypeScript'],
    github: 'https://github.com/Matusbh/Rendex-Anders',
    demo: 'https://rendex-anders.vercel.app',
  },
];
