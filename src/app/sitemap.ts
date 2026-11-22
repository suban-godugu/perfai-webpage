import { MetadataRoute } from 'next';
import { OFFICIAL_PRODUCTS, OFFICIAL_INDUSTRIES, OFFICIAL_CASE_STUDIES, OFFICIAL_RESOURCES } from '@/lib/db/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://perfai.in';

  const staticRoutes = [
    '',
    '/about',
    '/platform',
    '/partner',
    '/solutions',
    '/value-calculator',
    '/industries',
    '/technology',
    '/case-studies',
    '/resources',
    '/contact',
    '/request-assessment',
    '/request-demo',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = OFFICIAL_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/solutions/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const industryRoutes = OFFICIAL_INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const caseStudyRoutes = OFFICIAL_CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const resourceRoutes = OFFICIAL_RESOURCES.map((res) => ({
    url: `${baseUrl}/resources/${res.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...resourceRoutes,
  ];
}
