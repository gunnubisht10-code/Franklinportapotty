import { MetadataRoute } from 'next';
import { BUSINESS_INFO, CITIES, SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about/',
    '/contact/',
    '/services/',
    '/service-areas/',
    '/privacy/',
    '/terms/',
  ].map((route) => ({
    url: `${BUSINESS_INFO.base_url}${route}`,
    lastModified: new Date(),
    priority: route === '/' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BUSINESS_INFO.base_url}/services/${service.slug}/`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const cityRoutes = CITIES.map((city) => ({
    url: `${BUSINESS_INFO.base_url}/service-areas/${city.slug}/`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...cityRoutes,
  ];
}