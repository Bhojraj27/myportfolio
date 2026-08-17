import { personalInfo } from '@/data/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhojrajchavan.netlify.app';

export default function sitemap() {
  const routes = ['', '/projects/nexora', '/projects/bynaus', '/projects/ember-and-bean', '/projects/yau-teamup', '/projects/jeff-music'];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
