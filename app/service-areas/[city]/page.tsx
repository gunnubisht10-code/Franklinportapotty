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

const cityContent: { [key: string]: any } = {
  franklin: {
    about: "As our home base, Franklin holds a special place in our hearts. This city, rich with Civil War history and a vibrant, nationally acclaimed Main Street, is a hub of activity. We service every corner, from the sprawling fields of the Pilgrimage Music Festival to the new construction in the Berry Farms community. We cover all Franklin ZIP codes like 37064, 37067, and 37069, ensuring every historic celebration and modern development has top-tier sanitation.",
    affordableRentalText: "In Franklin, we ensure our pricing is as welcoming as the city itself. We provide transparent, competitive quotes for everything from a single unit for a backyard party in the Westhaven neighborhood to dozens of units for a major event at Harlinsdale Farm. Our goal is to offer exceptional value without any hidden fees, making clean sanitation accessible for every budget.",
    portableToiletText: "Our commitment to Franklin is reflected in the quality of our portable toilets. Each unit is meticulously cleaned and maintained, worthy of the city’s high standards. Whether you're managing a construction site near the Cool Springs Galleria or planning a wedding at a rustic local barn, our toilets arrive in pristine condition, fully stocked and ready for service, ensuring a positive experience for every user."
  },
  brentwood: {
    about: "Brentwood is a city defined by its beautiful parks, corporate headquarters, and prestigious residential communities. We understand the high expectations for service in areas like Maryland Farms and Crockett Park. Our team provides discreet, professional porta potty services to all Brentwood ZIP codes, including 37027, ensuring every corporate function, charity run, or home renovation project is equipped with immaculate facilities.",
    affordableRentalText: "We deliver premium sanitation solutions in Brentwood without the premium price tag. Our rental plans are designed to be cost-effective, offering luxury restroom trailers for upscale events and durable standard units for construction, all with clear, upfront pricing. We help Brentwood businesses and residents maintain their budgets while exceeding expectations for quality.",
    portableToiletText: "The portable toilets we deliver to Brentwood are a class apart. Reserved for high-end use, these units are modern, spotless, and aesthetically pleasing. We work with clients to ensure placement is both convenient and unobtrusive, respecting the beautiful landscapes of Brentwood's parks and neighborhoods. Reliability and cleanliness are our guarantees to the Brentwood community."
  },
  // Adding more unique content for other cities
  'cool-springs': {
    about: "Cool Springs is the dynamic commercial heart of Williamson County, a bustling center of retail, dining, and business. From large-scale construction around the Galleria to outdoor events at local office parks, the need for reliable sanitation is constant. We serve the entire Cool Springs area, providing rapid deployment of porta potties to keep business running smoothly and shoppers happy.",
    affordableRentalText: "In the fast-paced commercial environment of Cool Springs, budget efficiency is crucial. We offer highly competitive rates for both short-term and long-term rentals, ensuring that retail renovations, pop-up events, and construction projects can secure top-quality sanitation without impacting their bottom line. Our quotes are straightforward and customized to the unique demands of this commercial hub.",
    portableToiletText: "Our service in Cool Springs is built for speed and professionalism. We provide clean, modern portable toilets that reflect well on your business or project. Our logistics team navigates the busy traffic corridors of Cool Springs with expertise, guaranteeing on-time delivery and service that never disrupts your commercial operations."
  },
  nolensville: {
    about: "With its small-town charm and rapid growth, Nolensville is a unique blend of historic character and new development. We are proud to support this community, providing sanitation for the annual Buttercup Festival, new housing developments, and events at the historic schoolhouse. We cover all of Nolensville, ensuring its cherished community events and expanding neighborhoods have the best facilities.",
    affordableRentalText: "As Nolensville grows, we are committed to providing affordable porta potty rental options for both long-time residents and new builders. Our pricing is designed to support the community, offering great value for everything from a weekend event to a year-long construction project. We provide fair, honest pricing to our neighbors in Nolensville.",
    portableToiletText: "In Nolensville, we deliver portable toilets that are as clean and dependable as the town itself. We respect the community's character, ensuring our units are well-maintained and our service is friendly and reliable. For every farmer's market, school event, or construction site, we provide sanitation solutions you can count on."
  },
  'spring-hill': {
    about: "Spring Hill is a sprawling, family-friendly city that straddles Williamson and Maury counties, known for its automotive industry and rapid residential growth. We provide essential porta potty services for the massive new construction projects, community events at Harvey Park, and manufacturing facilities throughout the 37174 ZIP code. Our team is equipped to handle the large-scale needs of this booming city.",
    affordableRentalText: "For the large-scale industrial and construction projects in Spring Hill, budget management is paramount. We offer bulk rental discounts and cost-effective long-term plans that provide immense value. Homeowners and event planners also benefit from our competitive pricing, making quality sanitation affordable for everyone in the Spring Hill community.",
    portableToiletText: "Our portable toilet services in Spring Hill are robust and reliable. We provide durable, high-capacity units ideal for the demanding environment of manufacturing plants and large construction sites. For community and residential needs, we offer impeccably clean standard and deluxe units, all delivered with the professional service this hard-working city deserves."
  },
  // ... Adding all 30 cities with unique content
};

const getCityContent = (slug: string) => {
    // Fallback for cities not yet uniquely written
    if (!cityContent[slug]) {
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
    const content = cityContent[slug];
    const cityData = CITIES.find(c => c.slug === slug) || { name: 'City', state: 'TN' };
    
    return {
      name: cityData.name,
      state: cityData.state,
      mapAddress: `${cityData.name}, ${cityData.state}`,
      ...content
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
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Porta Potty Rental {content.name}, {content.state} | Portable Toilet Rentals</h1>
        </section>

        <section className="text-center bg-secondary text-white py-8 my-12 rounded-lg">
          <h2 className="text-3xl font-bold">Need a porta potty in {content.name}, {content.state} today?</h2>
           <a href={BUSINESS_INFO.phoneHref} className="mt-4 inline-block bg-accent text-dark font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
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
          <div className="rounded-lg overflow-hidden shadow-xl">
            <MapEmbed address={content.mapAddress} />
          </div>
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