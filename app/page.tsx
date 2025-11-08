
import { Metadata } from 'next';
import { BUSINESS_INFO, IMAGES, SERVICES } from '@/lib/constants';
import MapEmbed from '@/components/MapEmbed';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

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

export default function HomePage() {
  return (
    <>
     <JsonLd data={schema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Porta Potty Rental Franklin, TN | Portable Toilet Rentals</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to Joe Rental Works, Franklin's premier choice for dependable, sanitary, and budget-friendly portable restroom solutions for any occasion.
          </p>
        </section>

        <section className="text-center bg-secondary text-white py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold">Need a porta potty in Franklin, TN today?</h2>
          <p className="mt-2 text-lg">Call us now for immediate assistance and a free estimate!</p>
          <a href={BUSINESS_INFO.phoneHref} className="mt-4 inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
            {BUSINESS_INFO.phone}
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-dark text-center mb-8">Porta Potty Rental Services in Franklin, Tennessee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map(service => (
              <div key={service.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">High-quality, clean units for your specific needs.</p>
                <Link href={`/services/${service.slug}/`} className="font-semibold text-secondary hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gray-100 py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold text-primary">Same-Day Porta Potty Delivery in Franklin, TN!</h2>
          <p className="mt-2 text-lg text-gray-700">Unexpected needs? We've got you covered with our rapid response team.</p>
        </section>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <section>
                <h2 className="text-3xl font-bold text-dark mb-4">Affordable Porta Potty Rental</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Joe Rental Works, we believe that access to clean and convenient sanitation should not break your budget. We have structured our pricing to be highly competitive within the Franklin market, offering transparent quotes without hidden fees. Whether you need a single unit for a weekend home project or a fleet of restrooms for a multi-month construction endeavor, we provide cost-effective solutions that deliver exceptional value. Our team works with you to understand your requirements and recommend the most economical package to fit your specific circumstances.
                </p>
            </section>
             <img src={IMAGES.quickDelivery} alt="Quick delivery truck for porta potties" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center my-12">
             <img src={IMAGES.standard} alt="Standard blue porta potty" className="rounded-lg shadow-lg w-full h-auto object-cover" loading="lazy" />
            <section>
                <h2 className="text-3xl font-bold text-dark mb-4">Portable Toilet Rental Franklin TN</h2>
                <p className="text-gray-700 leading-relaxed">
                    Our inventory of portable toilets in Franklin, TN, is meticulously maintained to ensure the highest standards of hygiene and user comfort. Each unit is thoroughly cleaned, sanitized, and restocked before delivery. From standard models ideal for construction sites to deluxe units with hand sanitizer dispensers perfect for small gatherings, our equipment is modern, durable, and ready to perform. We handle all aspects of placement, servicing, and removal, providing a completely hassle-free rental experience for our clients throughout Williamson County.
                </p>
            </section>
        </div>

        <section className="text-center bg-primary text-white py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold">Franklin's #1 Porta Potty Rental Company</h2>
          <p className="mt-2 text-lg">Experience the difference with our commitment to quality and customer service.</p>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold text-dark text-center mb-4">About Franklin</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-8">
            Franklin, Tennessee, is a city renowned for its historic charm and vibrant community spirit. Located just south of Nashville, it features a beautifully preserved Main Street, Civil War battlefields, and a thriving arts scene. We are proud to serve all of Franklin's unique neighborhoods, from the historic homes in the downtown core to the sprawling estates of Leiper's Fork and the bustling commercial centers of Cool Springs. We provide services to all local ZIP codes, including 37064, 37067, and 37069, ensuring events and projects near landmarks like The Factory at Franklin and the Carter House have the sanitation facilities they need.
          </p>
          <MapEmbed address={BUSINESS_INFO.hqMapAddress} />
        </section>
      </div>
    </>
  );
}
