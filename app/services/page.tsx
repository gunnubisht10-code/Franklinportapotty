import { Metadata } from 'next';
import { BUSINESS_INFO, SERVICES } from '@/lib/constants';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Portable Sanitation Services",
  description: `Explore our wide range of porta potty rental solutions in Franklin, TN. From construction sites to luxury events, we have a unit for every need.`,
  alternates: {
    canonical: '/services/',
  },
};

const pageUrl = `${BUSINESS_INFO.base_url}/services/`;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": "Our Services",
      "isPartOf": {
        "@id": `${BUSINESS_INFO.base_url}/#website`
      },
      "description": "Comprehensive list of portable toilet and sanitation services offered by Joe Rental Works."
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
          "name": "Services",
          "item": pageUrl
        }
      ]
    }
  ]
};

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={schema} />
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Sanitation Services</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We offer a comprehensive range of portable restroom solutions to meet the specific needs of any project, event, or emergency situation in the Franklin area.
            </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">
                  Top-tier solutions for {service.title.toLowerCase()}.
                </p>
              </div>
              <div className="p-6 bg-gray-50">
                <Link href={`/services/${service.slug}/`} className="font-bold text-secondary hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
