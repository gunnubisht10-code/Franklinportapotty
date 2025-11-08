
import { BUSINESS_INFO, CITIES, SERVICES } from '@/lib/constants';
import { MetadataRoute } from 'next';

export async function GET(): Promise<Response> {
  const staticRoutes = [
    '', 
    '/about/', 
    '/contact/', 
    '/services/', 
    '/service-areas/'
    // Add other static routes here
  ].map((route) => ({
    url: `${BUSINESS_INFO.base_url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BUSINESS_INFO.base_url}/services/${service.slug}/`,
    lastModified: new Date().toISOString(),
  }));

  const cityRoutes = CITIES.map((city) => ({
    url: `${BUSINESS_INFO.base_url}/service-areas/${city.slug}/`,
    lastModified: new Date().toISOString(),
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...cityRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.lastModified}</lastmod>
      <priority>0.7</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
