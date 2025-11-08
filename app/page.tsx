
import { Metadata } from 'next';
import { BUSINESS_INFO, IMAGES, SERVICES, WHY_CHOOSE_US, TESTIMONIALS } from '@/lib/constants';
import MapEmbed from '@/components/MapEmbed';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
// FIX: Replaced non-existent 'FaSparkles' icon with 'FaHandsWash' to fix import error.
import { FaStar, FaMapMarkerAlt, FaClock, FaHeadset, FaHandsWash } from 'react-icons/fa';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Porta Potty Rental Franklin, TN | Portable Toilet Rentals",
  description: "Joe Rental Works provides top-quality porta potty and portable toilet rentals in Franklin, TN. Fast delivery, clean units, and affordable prices for your event or job site.",
  alternates: {
    canonical: '/',
  },
};

const pageUrl = `${BUSINESS_INFO.base_url}/`;

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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.9251,
        "longitude": -86.8689
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "servesCuisine": "",
      "areaServed": {
        "@type": "Place",
        "name": "Franklin, TN"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${BUSINESS_INFO.base_url}/#website`,
      "url": BUSINESS_INFO.base_url,
      "name": BUSINESS_INFO.name,
      "description": "Your reliable portable toilet supplier in Franklin.",
      "publisher": {
        "@id": pageUrl
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to rent a porta potty in Franklin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of renting a porta potty in Franklin, TN, varies based on the type of unit, rental duration, and number of units required. Contact Joe Rental Works for a precise, free quote tailored to your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer same-day delivery for portable toilets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in same-day delivery for porta potty rentals throughout Franklin and the surrounding areas. Call us now to check availability and schedule your drop-off."
          }
        }
      ]
    },
     {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": pageUrl
      }]
    }
  ]
};

const iconMap: { [key: string]: React.ElementType } = {
    FaMapMarkerAlt,
    FaClock,
    FaHeadset,
    // FIX: Replaced non-existent 'FaSparkles' icon with 'FaHandsWash'.
    FaHandsWash
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={schema} />
      
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 sm:py-32">
        <div className="absolute inset-0">
          <img src={IMAGES.event} alt="Outdoor event with porta potties" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Porta Potty Rental Franklin, TN</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Fast, reliable, and sparkling clean portable toilet solutions for construction sites, special events, and any outdoor need in the greater Franklin area.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="inline-block bg-accent text-dark font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
              Get Your Free Quote Today
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-2">Our Porta Potty Rental Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">From basic units for job sites to luxury trailers for VIP events, we have the right solution for you.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map(service => (
              <div key={service.slug} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-primary">
                <h3 className="text-2xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">Top-quality, sanitized units perfect for your specific requirements.</p>
                <Link href={`/services/${service.slug}/`} className="font-bold text-secondary hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
                <Link href="/services/" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-90 transition-all">
                    View All Services
                </Link>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="my-20 bg-gray-100 py-16 rounded-lg">
           <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-2">Why Choose Joe Rental Works?</h2>
           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We are committed to providing an unmatched rental experience. Here’s how we stand out.</p>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {WHY_CHOOSE_US.map(item => {
                    const Icon = iconMap[item.icon];
                    return (
                        <div key={item.title} className="px-4">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto mb-4">
                               {Icon && <Icon className="h-8 w-8" />}
                            </div>
                            <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                    );
                })}
           </div>
        </section>
        
        {/* CTA Section */}
        <section className="text-center bg-secondary text-white py-12 my-12 rounded-lg bg-cover bg-center" style={{backgroundImage: `url(${IMAGES.quickDelivery})`}}>
          <div className="bg-secondary bg-opacity-80 py-8">
            <h2 className="text-3xl font-bold">Need a Porta Potty in Franklin Today?</h2>
            <p className="mt-2 text-lg">We offer same-day delivery! Call us now for immediate assistance.</p>
            <a href={BUSINESS_INFO.phoneHref} className="mt-6 inline-block bg-accent text-dark font-bold py-3 px-8 rounded-lg text-2xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-20">
            <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-2">What Our Customers Say</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We're proud to have earned the trust of clients all across the Franklin area.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent">
                        <div className="flex text-yellow-400 mb-4">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                        <p className="font-bold text-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* About Franklin Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-4">Proudly Serving Franklin, TN</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
            From the historic downtown Main Street to the growing communities in Westhaven and Cool Springs, Joe Rental Works is your local partner. We serve events near landmarks like The Factory and provide essential services for construction projects across all local ZIP codes (37064, 37067, 37069). We know Franklin, and we're dedicated to keeping it clean and functional.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <MapEmbed address={BUSINESS_INFO.hqMapAddress} />
          </div>
        </section>
      </div>
    </>
  );
}
