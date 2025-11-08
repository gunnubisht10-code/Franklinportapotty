
import { Metadata } from 'next';
import { BUSINESS_INFO, IMAGES, CITIES, SERVICES } from '@/lib/constants';
import MapEmbed from '@/components/MapEmbed';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const dynamic = 'error';
export const revalidate = false;

// Generate static pages for all cities
export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

// Generate unique metadata for each city page
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) {
    return { title: 'Area Not Served' };
  }

  const title = `Porta Potty Rental ${city.name}, ${city.state} | Portable Toilet Rentals`;
  const description = `Your local source for porta potty rentals in ${city.name}, ${city.state}. ${BUSINESS_INFO.name} offers fast, reliable service for events and construction projects.`;
  
  return {
    title,
    description,
    alternates: {
      canonical: `/service-areas/${city.slug}/`,
    },
  };
}

// --- Content Generation (Example for one city) ---
// This content must be 100% unique for each city. No templating.
const getCityContent = (slug: string) => {
    if (slug === 'brentwood') {
        return {
            name: 'Brentwood',
            state: 'TN',
            about: "Brentwood, Tennessee, is a distinguished suburb of Nashville known for its rolling hills, beautiful parks, and upscale communities. It's a city that values quality and pristine environments, whether at a corporate event in the Maryland Farms area or a community festival at Crockett Park. We proudly serve all of Brentwood's neighborhoods, providing sanitation solutions that match the city's high standards. Our services cover all local ZIP codes, including 37027, ensuring that any gathering or project, from a wedding at the Ravenswood Mansion to a new construction site off Concord Road, has access to immaculate and dependable portable restrooms.",
            mapAddress: 'Brentwood, TN',
            affordableRentalText: "In Brentwood, where event standards are exceptionally high, finding affordable yet premium porta potty rentals is key. We offer competitive pricing on our entire fleet, from standard units to luxury restroom trailers, ensuring your budget is respected without compromising on quality or cleanliness. We provide detailed, transparent quotes for services in Brentwood, allowing for precise financial planning for your sophisticated gathering or long-term project.",
            portableToiletText: "Our portable toilet rental services in Brentwood are designed to be discreet, clean, and efficient. We understand the aesthetic of the area and ensure our units are placed thoughtfully and maintained impeccably. Each portable toilet delivered to a Brentwood location undergoes a rigorous sanitation process, ensuring it arrives in pristine condition, ready for your guests or workforce. We offer a range of styles to seamlessly blend with any event's decor and requirements."
        };
    }
    // Placeholder for other cities
    const genericCity = CITIES.find(c => c.slug === slug) || { name: 'City', state: 'State' };
    return {
        name: genericCity.name,
        state: genericCity.state,
        about: `[Unique content about ${genericCity.name} is required here. Describe its character, neighborhoods, landmarks, and ZIP codes.]`,
        mapAddress: `${genericCity.name}, ${genericCity.state}`,
        affordableRentalText: `[Unique text describing affordable rentals in ${genericCity.name}. Avoid generic phrases.]`,
        portableToiletText: `[Unique text about the portable toilet rental experience specific to ${genericCity.name}.]`
    };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = CITIES.find((c) => c.slug === params.city);
  const content = getCityContent(params.city);
  
  if (!city) {
    return <div>City not found</div>;
  }

  const pageUrl = `${BUSINESS_INFO.base_url}/service-areas/${city.slug}/`;
  const schema = {
     "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": BUSINESS_INFO.name,
          "image": IMAGES.portableToilets,
          "@id": pageUrl,
          "url": pageUrl,
          "telephone": BUSINESS_INFO.phone,
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address,
            "addressLocality": "Franklin",
            "addressRegion": "TN",
            "postalCode": "37064",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": city.name
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": `How quickly can you deliver a porta potty to ${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer same-day delivery for porta potty rentals in ${city.name}, ${city.state}, subject to availability. We recommend calling us as early as possible to secure your unit.`
            }
          }]
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
            "item": `${BUSINESS_INFO.base_url}/service-areas/`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": city.name,
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
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Porta Potty Rental {content.name}, {content.state} | Portable Toilet Rentals</h1>
        </section>

        <section className="text-center bg-secondary text-white py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold">Need a porta potty in {content.name}, {content.state} today?</h2>
           <a href={BUSINESS_INFO.phoneHref} className="mt-4 inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
            Call for a Free Quote
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-dark text-center mb-8">Porta Potty Rental Services in {content.name}, Tennessee</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {BUSINESS_INFO.name} is proud to offer our full range of portable sanitation solutions to the residents and businesses of {content.name}. From luxury restroom trailers for elegant outdoor weddings to sturdy construction-grade units for job sites, we have the right equipment to make your project a success.
          </p>
        </section>
        
        <section className="text-center bg-gray-100 py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Same-Day Porta Potty Delivery in {content.name}</h2>
        </section>
        
        <section className="my-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Affordable Porta Potty Rental</h2>
            <p className="text-gray-700 leading-relaxed">{content.affordableRentalText}</p>
        </section>

        <section className="my-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Portable Toilet Rental {content.name} {content.state}</h2>
            <p className="text-gray-700 leading-relaxed">{content.portableToiletText}</p>
        </section>

         <section className="text-center bg-primary text-white py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold">{content.name}’s #1 Porta Potty Rental Company</h2>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-dark text-center mb-4">About {content.name}</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            {content.about}
          </p>
          <MapEmbed address={content.mapAddress} />
        </section>

        <section className="my-16">
            <h2 className="text-3xl font-bold text-dark text-center mb-8">Our Services Available in {content.name}</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map(service => (
              <div key={service.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <Link href={`/services/${service.slug}/`} className="font-semibold text-secondary hover:underline">
                  View Details &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
