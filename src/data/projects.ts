// Datos que no se traducen: enlaces, imágenes y etiquetas de stack.
// Los textos (problema, solución) están en src/i18n/*.ts, indexados por `id`.
export interface Project {
  id: string;
  title: string;
  image: string;
  video?: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export const featured: Project = {
  id: 'presupro',
  title: 'PresuPro',
  image: '/PresuPro.png',
  stack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Vitest'],
  github: 'https://github.com/Matusbh/Saas-Presupuestos',
  demo: 'https://saas-presupuestos.vercel.app/',
};

export const projects: Project[] = [
  {
    id: 'ragdocs',
    title: 'RAG Docs Local',
    image: '/RAG-local.png',
    stack: ['Python', 'FastAPI', 'Ollama', 'Qdrant'],
    github: 'https://github.com/Matusbh/rag-docs-local',
  },
  {
    id: 'mymoney',
    title: 'MyMoney',
    image: '/MyMoney_recorrido.mp4',
    video: '/MyMoney_recorrido.mp4',
    stack: ['React', 'Supabase', 'Gemini API', 'grammY'],
    github: 'https://github.com/Matusbh/My-money',
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
