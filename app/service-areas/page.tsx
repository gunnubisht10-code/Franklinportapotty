import { Metadata } from 'next';
import { BUSINESS_INFO, CITIES, IMAGES } from '@/lib/constants';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Service Areas | Franklin & Surrounding Cities",
  description: `We provide porta potty rentals to Franklin, Brentwood, Nashville, and 30 local cities. Find your town and get a free quote today.`,
  alternates: {
    canonical: '/service-areas/',
  },
};

const pageUrl = `${BUSINESS_INFO.base_url}/service-areas/`;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": "Service Areas",
      "isPartOf": {
        "@id": `${BUSINESS_INFO.base_url}/#website`
      },
      "description": "List of cities and towns served by Joe Rental Works in and around Franklin, TN."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BUSINESS_INFO.base_url
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Service Areas",
          "item": pageUrl
        }
      ]
    }
  ]
};

export default function ServiceAreasHubPage() {
  return (
    <>
      <JsonLd data={schema} />
       <div className="relative bg-primary">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={IMAGES.serviceAreasBg} alt="Map of Tennessee" loading="lazy" />
          <div className="absolute inset-0 bg-primary opacity-80 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Service Areas</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">Proudly serving communities throughout Williamson County and the Greater Nashville Area.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Find Your Location</h2>
            <p className="mt-2 text-lg text-gray-600">We deliver clean, reliable porta potties to the following cities and towns.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CITIES.map((city) => (
            <Link 
                key={city.slug} 
                href={`/service-areas/${city.slug}/`} 
                className="block p-4 bg-white rounded-lg shadow text-center text-primary font-semibold hover:bg-secondary hover:text-white transition-colors duration-300"
            >
                {city.name}, {city.state}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
