
import { Metadata } from 'next';
import { BUSINESS_INFO, IMAGES, SERVICES } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const dynamic = 'error';
export const revalidate = false;

// Generate static pages for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// Generate unique metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const title = `${service.title} | Franklin, TN`;
  const description = `Expert ${service.title.toLowerCase()} from Joe Rental Works in Franklin, TN. Perfect for any need. Get a free quote today.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${BUSINESS_INFO.base_url}/services/${service.slug}/`,
    },
  };
}

// --- Content Generation (Example for one service) ---
// In a real project, this content would be unique for each slug, likely fetched from a CMS or markdown files.
// For this example, we'll generate unique content for 'portable-toilet-rental'.

const getServiceContent = (slug: string) => {
    if (slug === 'portable-toilet-rental') {
        return {
            title: 'Portable Toilet Rental',
            description: 'Our standard portable toilet is the cornerstone of effective site and event sanitation. It provides a necessary convenience in a compact, durable, and cost-effective package.',
            features: [
                'Spacious interior with anti-slip flooring',
                'Translucent roof for natural lighting',
                'Excellent ventilation to reduce odors',
                'Includes toilet paper and hand sanitizer dispenser',
                'Lockable door for privacy and security'
            ],
            useCases: 'Perfect for construction sites, public parks, agricultural fields, and any location where basic, reliable restroom facilities are required for staff or the public.',
            faq: [
                {
                    q: 'How often are the standard portable toilets serviced?',
                    a: 'Standard service is once per week, but we can create a custom service schedule (more or less frequent) based on your specific usage and needs.'
                },
                {
                    q: 'Can these units be used for large public events?',
                    a: 'Absolutely. We calculate the required number of units based on your expected attendance and event duration to ensure adequate facilities for all guests.'
                }
            ],
            image: IMAGES.standard,
            imageAlt: 'A clean, standard portable toilet ready for rental in Franklin, TN'
        };
    }

    // Placeholder for other services
    const genericService = SERVICES.find(s => s.slug === slug) || { title: 'Service' };
    return {
        title: genericService.title,
        description: `Discover more about our ${genericService.title.toLowerCase()} services. [Note: This is placeholder content. Each service page requires unique text.]`,
        features: ['Feature A', 'Feature B', 'Feature C'],
        useCases: 'Ideal for various applications. [Please add unique use cases.]',
        faq: [{ q: 'Generic Question?', a: 'Generic answer. Please write unique FAQs for each service.' }],
        image: IMAGES.generic,
        imageAlt: `Image for ${genericService.title}`
    };
}


export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  const content = getServiceContent(params.slug);
  
  if (!service) {
    return <div>Service not found</div>;
  }

  const pageUrl = `${BUSINESS_INFO.base_url}/services/${service.slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
          "@type": "LocalBusiness",
          "name": BUSINESS_INFO.name,
           "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address,
            "addressLocality": "Franklin",
            "addressRegion": "TN",
            "postalCode": "37064",
            "addressCountry": "US"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "Franklin"
        },
        "name": service.title,
        "description": `Reliable ${service.title.toLowerCase()} services in the Franklin, TN area provided by ${BUSINESS_INFO.name}.`,
        "url": pageUrl
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
            "item": `${BUSINESS_INFO.base_url}/services/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <JsonLd data={schema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{content.title} in Franklin, TN</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{content.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src={content.image} alt={content.imageAlt} className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-dark mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {content.features.map((feature, index) => <li key={index}>{feature}</li>)}
                </ul>
                <div className="mt-8">
                     <Link href="/contact/" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                        Request a Quote
                    </Link>
                </div>
            </div>
        </div>

        <div className="my-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-dark mb-4">Common Use Cases</h2>
            <p className="text-gray-700 leading-relaxed">{content.useCases}</p>
        </div>

        <div>
            <h2 className="text-3xl font-bold text-dark text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {content.faq.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg text-primary">{item.q}</h3>
                        <p className="mt-2 text-gray-600">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </>
  );
}
