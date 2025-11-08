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
export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
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


const serviceContentMap: { [key: string]: any } = {
  'portable-toilet-rental': {
    title: 'Portable Toilet Rental',
    description: 'Our standard portable toilet is the workhorse of sanitation, providing essential, reliable facilities for any location. It\'s the perfect blend of simplicity, durability, and cost-effectiveness.',
    features: ['Spacious, well-ventilated interior', 'Anti-slip flooring for safety', 'Translucent roof for natural light', 'Stocked with 2-ply toilet paper', 'Secure, lockable door'],
    useCases: 'Ideal for construction sites, public parks, athletic fields, and any situation requiring fundamental and dependable restroom access.',
    faq: [{ q: 'How often are these units serviced?', a: 'Weekly service is standard, but we offer flexible schedules from daily to monthly based on your site traffic and needs.' }],
    image: IMAGES.standard,
    imageAlt: 'A standard blue portable toilet'
  },
  'porta-john-rental': {
    title: 'Porta John Rental',
    description: 'When you need a no-fuss, straightforward sanitation solution, our Porta John rentals deliver. These units are clean, functional, and ready for rapid deployment to your job site or event.',
    features: ['Lightweight yet sturdy construction', 'Occupancy signal for user convenience', 'Internal urinal to minimize seat use', 'Designed for easy transport and placement', 'Weather-resistant materials'],
    useCases: 'Excellent for road crews, agricultural operations, short-term construction projects, and as supplementary units for large gatherings.',
    faq: [{ q: 'Is there a difference between a Porta John and a portable toilet?', a: 'The terms are often used interchangeably. We ensure all our units, regardless of name, meet the same high standards of cleanliness and functionality.' }],
    image: IMAGES.generic,
    imageAlt: 'A generic porta john unit'
  },
  'restroom-trailer-rental': {
    title: 'Restroom Trailer Rental',
    description: 'Elevate the guest experience with our luxurious restroom trailers. These multi-stall units offer the comfort and amenities of an indoor restroom in a fully mobile, elegant package.',
    features: ['Climate control (heating and A/C)', 'Flushing toilets and running water sinks', 'Vanity mirrors and premium lighting', 'Spacious, private stalls', 'High-end interior finishes'],
    useCases: 'The perfect choice for weddings, corporate events, VIP areas at festivals, and any upscale outdoor gathering where comfort is paramount.',
    faq: [{ q: 'Do restroom trailers require power and water hookups?', a: 'Yes, they typically require standard electrical and water hookups. However, we can provide onboard water tanks and generators for remote locations.' }],
    image: IMAGES.luxuryTrailer,
    imageAlt: 'An elegant luxury restroom trailer'
  },
  'construction-site-toilets': {
    title: 'Construction Site Toilets',
    description: 'Keep your crew productive and your job site compliant with our rugged, dependable construction toilets. Designed to withstand the rigors of a worksite, they are a vital component of site safety and efficiency.',
    features: ['Durable, high-visibility design', 'Optional crane hooks for high-rise projects', 'Hand sanitizer dispensers in every unit', 'Regularly scheduled, thorough cleaning service', 'Meets all OSHA requirements'],
    useCases: 'Essential for all construction projects, from residential home builds and commercial developments to long-term infrastructure work.',
    faq: [{ q: 'How many toilets do I need for my construction site?', a: 'OSHA recommends one toilet per 10 workers for a 40-hour work week. We can help you calculate the exact number for your crew size and schedule.' }],
    image: IMAGES.construction,
    imageAlt: 'A porta potty on a construction site'
  },
  'event-porta-potty-rental': {
    title: 'Event Porta Potty Rental',
    description: 'Ensure your guests are comfortable with our clean and well-maintained event porta potties. We provide newer, dedicated units exclusively for events to guarantee a fresh and pleasant user experience.',
    features: ['Clean, modern, and graffiti-free units', 'Equipped with hand sanitizer', 'Spacious interiors for user comfort', 'Strategic placement planning included', 'Sufficiently stocked for your event duration'],
    useCases: 'Perfect for concerts, festivals, community fairs, sporting events, and private parties of any size.',
    faq: [{ q: 'How do you determine the right number of units for an event?', a: 'We use an industry-standard chart that considers event duration, expected attendance, and whether alcohol is served to recommend the optimal number of units.' }],
    image: IMAGES.event,
    imageAlt: 'A row of porta potties at an outdoor event'
  },
  'luxury-portable-restrooms': {
    title: 'Luxury Portable Restrooms',
    description: 'Bridge the gap between standard units and full restroom trailers with our luxury portable restrooms. These single-unit stalls offer upgraded amenities for a more refined experience.',
    features: ['Flushable toilet operated by a foot pump', 'Internal sink with running water', 'Interior mirror and coat hook', 'Solar-powered lighting', 'Enhanced interior space'],
    useCases: 'An excellent upgrade for smaller, more intimate outdoor weddings, corporate picnics, and exclusive private events.',
    faq: [{ q: 'Is the waste visible in a luxury portable restroom?', a: 'No, the flushing mechanism keeps waste out of sight in a sealed tank, providing a cleaner and more pleasant experience.' }],
    image: IMAGES.deluxe,
    imageAlt: 'A deluxe, flushable portable restroom'
  },
  'temporary-restroom-rental': {
    title: 'Temporary Restroom Rental',
    description: 'When you need restroom facilities for a limited time, our temporary rental service is the perfect fit. We provide flexible solutions for any situation requiring short-term sanitation.',
    features: ['Wide variety of unit types available', 'Flexible rental periods (daily, weekly, monthly)', 'Fast delivery and prompt pickup', 'Comprehensive servicing during rental period', 'Scalable solutions for any need'],
    useCases: 'Ideal for bathroom remodels, emergency situations, seasonal businesses, and any temporary gap in permanent restroom availability.',
    faq: [{ q: 'Can I rent a unit for just one day?', a: 'Yes, we offer daily rentals, which are perfect for single-day events or short-term needs.' }],
    image: IMAGES.party,
    imageAlt: 'Porta potties set up for a temporary party'
  },
  'portable-sanitation-services': {
    title: 'Portable Sanitation Services',
    description: 'Beyond just rentals, we offer a complete suite of portable sanitation services. This includes waste pumping, unit cleaning, restocking, and full management of your sanitation plan.',
    features: ['Scheduled pumping for holding tanks', 'Thorough cleaning and sanitizing of units', 'Restocking of toilet paper and hand sanitizer', 'Certified waste disposal', 'Expert consultation and planning'],
    useCases: 'A comprehensive service for large-scale, long-term projects, festivals requiring ongoing maintenance, and clients who want a hands-off sanitation management solution.',
    faq: [{ q: 'Do you service units that are not rented from you?', a: 'In some cases, yes. Please contact us with details about your unit and location to discuss service options.' }],
    image: IMAGES.cleaningTruck,
    imageAlt: 'A sanitation service truck'
  },
  'outdoor-event-toilet-rental': {
    title: 'Outdoor Event Toilet Rental',
    description: 'From rustic woodland weddings to bustling city park festivals, our outdoor event toilets are designed to provide reliable sanitation in any environment. We ensure every unit is pristine and ready for your guests.',
    features: ['Units dedicated exclusively to events', 'Pre-event consultation on placement', 'Sufficient stock of supplies for the event duration', 'Can be paired with handwashing stations', 'Prompt post-event removal'],
    useCases: 'Specifically for outdoor concerts, food festivals, charity runs, family reunions, and any open-air gathering.',
    faq: [{ q: 'What if we run out of supplies during our event?', a: 'We stock our units generously based on expected use. For very large or multi-day events, we can arrange for on-site servicing to restock supplies.' }],
    image: IMAGES.festival,
    imageAlt: 'Porta potties lined up at a festival'
  },
  'long-term-rentals': {
    title: 'Long-Term Rentals',
    description: 'For ongoing projects and seasonal needs, our long-term rental plans offer the best value. Get consistent, reliable service and quality units for the duration of your project at a competitive price.',
    features: ['Discounted monthly rates', 'Regular, scheduled weekly servicing included', 'Priority service calls', 'Unit swap-outs available if needed', 'Flexible billing options'],
    useCases: 'The most cost-effective option for construction sites, industrial facilities, parks and recreation departments, and seasonal agricultural operations.',
    faq: [{ q: 'What is included in the weekly service for a long-term rental?', a: 'Our service includes pumping the waste tank, cleaning all interior surfaces, restocking toilet paper and hand sanitizer, and signing off on a service log.' }],
    image: IMAGES.construction,
    imageAlt: 'A porta potty for a long-term construction project'
  },
  'short-term-rentals': {
    title: 'Short-Term Rentals',
    description: 'Perfect for weekend events or projects lasting just a few days. Our short-term rental service is designed for maximum convenience, with fast, flexible scheduling for delivery and pickup.',
    features: ['Daily and weekend rental rates', 'Easy, quick ordering process', 'Guaranteed on-time delivery for your event', 'Pristine, event-quality units', 'Hassle-free pickup after your rental period'],
    useCases: 'Ideal for weekend parties, home renovations, small community events, and any need that spans from one to several days.',
    faq: [{ q: 'Do you charge extra for weekend delivery?', a: 'We offer delivery 7 days a week. Please contact us for a quote, as delivery fees may vary based on timing and location, but we always provide transparent pricing upfront.' }],
    image: IMAGES.familyReunion,
    imageAlt: 'A portable toilet at a family reunion'
  },
  'ada-handicap-toilets': {
    title: 'ADA Handicap Toilets',
    description: 'Ensure your site or event is accessible and welcoming to all guests with our ADA-compliant handicap toilets. These units provide ample space and necessary features for individuals with disabilities.',
    features: ['Spacious interior for wheelchair maneuverability', 'Interior grab bars for safety and support', 'Lower toilet seat height', 'Ground-level entry for easy access', 'Meets all ADA guidelines'],
    useCases: 'Essential for any public event, commercial site, or private gathering to ensure inclusivity and meet legal accessibility requirements.',
    faq: [{ q: 'Are ADA units required for my event?', a: 'The Americans with Disabilities Act (ADA) requires accessible facilities at public events. We recommend at least 1 ADA unit per 20 standard units, or at least one for any public event.' }],
    image: IMAGES.ada,
    imageAlt: 'A spacious, ADA-compliant handicap portable toilet'
  },
  'handwashing-stations': {
    title: 'Handwashing Stations',
    description: 'Promote superior hygiene at your event or job site with our standalone handwashing stations. These units provide a convenient way for guests and workers to wash their hands with fresh water.',
    features: ['Dual-sided sinks for high traffic', 'Foot-pump operation for hands-free use', 'Includes soap and paper towel dispensers', 'Large fresh water tank capacity', 'Self-contained gray water tank'],
    useCases: 'A vital addition to food festivals, construction sites, school events, and anywhere that hygiene is a top priority.',
    faq: [{ q: 'How many people can one handwashing station serve?', a: 'A standard dual-sink station typically holds enough water and supplies for around 200-300 uses before needing a refill.' }],
    image: IMAGES.handwashing,
    imageAlt: 'A dual-sink portable handwashing station'
  },
  'holding-tanks': {
    title: 'Holding Tanks',
    description: 'Our durable holding tanks provide a safe and effective solution for temporary waste storage. They are ideal for job site trailers, campers/RVs, and temporary kitchens where sewer access is unavailable.',
    features: ['Large capacity (typically 250-300 gallons)', 'Low-profile design to fit under trailers', 'Multiple inlet and outlet ports for flexibility', 'Durable, leak-proof polyethylene construction', 'Pumping and maintenance services available'],
    useCases: 'Perfect for construction office trailers, food vendor gray water, temporary medical facilities, and long-term RV parking.',
    faq: [{ q: 'How do I know when the holding tank needs to be pumped?', a: 'We can set up a regular pumping schedule based on your expected usage. We also offer on-call pumping services if it fills up sooner than expected.' }],
    image: IMAGES.cleaningTruck, // Use a related image
    imageAlt: 'A holding tank pumping service'
  },
  'high-rise-porta-potty': {
    title: 'High-Rise Porta Potty',
    description: 'Designed specifically for multi-story construction projects, our high-rise porta potties save time and increase productivity by bringing restroom facilities directly to the workers on upper floors.',
    features: ['Heavy-duty steel sling for safe crane lifting', 'Compact footprint to fit in freight elevators', 'Durable, enclosed unit for safety', 'Wheels for easy movement on-site', 'Full-service cleaning and relocation'],
    useCases: 'Essential for high-rise building construction, major renovation projects, and any job site where vertical transportation of workers is a factor.',
    faq: [{ q: 'How does the unit get moved between floors?', a: 'The unit can be lifted by a crane using the attached sling or rolled into a service elevator for repositioning as construction progresses.' }],
    image: IMAGES.construction, // Use a related image
    imageAlt: 'A porta potty suitable for high-rise construction'
  },
  'emergency-porta-potty-rental': {
    title: 'Emergency Porta Potty Rental',
    description: 'When disaster strikes or unexpected situations arise, you can count on our rapid response team. We provide immediate deployment of emergency porta potties to restore sanitation quickly.',
    features: ['24/7 emergency hotline', 'Priority dispatch for urgent needs', 'Large inventory ready for deployment', 'Solutions for natural disasters, water main breaks, etc.', 'Coordination with first responders'],
    useCases: 'Critical for disaster relief efforts, firefighting base camps, unexpected plumbing failures, and any urgent, large-scale sanitation need.',
    faq: [{ q: 'How quickly can you deliver in an emergency?', a: 'We can typically have units on-site within a few hours of an emergency call, depending on the location and scale of the need.' }],
    image: IMAGES.quickDelivery,
    imageAlt: 'A truck delivering emergency porta potties'
  },
  'wedding-restroom-rental': {
    title: 'Wedding Restroom Rental',
    description: 'Your special day deserves better than a standard porta potty. We offer elegant solutions, including luxury restroom trailers and pristine deluxe units, to ensure your guests\' comfort matches the elegance of your event.',
    features: ['Luxury restroom trailers with high-end finishes', 'Deluxe flushing units with sinks', 'Attendant services available upon request', 'Discreet and professional placement', 'Guaranteed spotless and fresh'],
    useCases: 'An absolute must for outdoor weddings, barn weddings, backyard receptions, and any venue without sufficient permanent facilities.',
    faq: [{ q: 'Should I hide the restrooms at my wedding?', a: 'While placement should be convenient, our luxury trailers are so elegant you won\'t feel the need to hide them! We work with you or your planner to find the perfect, most discreet location.' }],
    image: IMAGES.luxuryTrailer,
    imageAlt: 'An elegant restroom trailer perfect for a wedding'
  },
  'festival-porta-potty-rental': {
    title: 'Festival Porta Potty Rental',
    description: 'Managing sanitation for a festival is a massive undertaking. We are experts in large-scale event logistics, providing the right number of units, handwashing stations, and a service plan to keep your grounds clean and attendees happy.',
    features: ['Large volume deployment capabilities', 'Strategic placement for crowd flow', 'Regularly scheduled servicing during multi-day events', 'ADA-compliant units and handwashing stations', 'Experienced logistics team'],
    useCases: 'Indispensable for music festivals, art fairs, cultural celebrations, and any large-scale public gathering.',
    faq: [{ q: 'Can you handle a festival with 10,000+ attendees?', a: 'Absolutely. We have the inventory and logistical experience to handle very large crowds and can create a detailed sanitation plan to meet your needs.' }],
    image: IMAGES.festival,
    imageAlt: 'A large bank of porta potties at a music festival'
  },
  'special-event-restrooms': {
    title: 'Special Event Restrooms',
    description: 'For any event that is a cut above the ordinary, our special event restrooms provide a superior experience. These units are reserved exclusively for events, ensuring they are always in pristine, like-new condition.',
    features: ['Dedicated inventory of event-only units', 'Optional amenities like mirrors and shelving', 'Immaculately clean and graffiti-free', 'Hand sanitizer dispensers in every unit', 'Professional and courteous delivery team'],
    useCases: 'Corporate outings, anniversary parties, graduation celebrations, outdoor fundraisers, and community block parties.',
    faq: [{ q: 'What makes a "special event" unit different from a construction unit?', a: 'Our special event units are never used on construction sites. They are newer, cleaner, and maintained to a higher aesthetic standard to be appropriate for guests.' }],
    image: IMAGES.event,
    imageAlt: 'Clean special event restrooms'
  },
  'commercial-porta-potty-rental': {
    title: 'Commercial Porta Potty Rental',
    description: 'We provide reliable and professional porta potty rental services for commercial properties and businesses. Ensure your employees and customers have access to clean facilities during renovations, expansions, or seasonal peaks.',
    features: ['Long-term rental agreements', 'Scheduled servicing that doesn\'t disrupt business', 'Clean, professional-looking units', 'ADA-compliant options for public access', 'Scalable solutions for growing needs'],
    useCases: 'Retail store remodels, warehouse facilities, garden centers, seasonal attractions (e.g., pumpkin patches), and any business needing supplemental restrooms.',
    faq: [{ q: 'Can you service the units outside of our business hours?', a: 'Yes, we can work with you to create a service schedule that minimizes disruption to your customers and operations, including early morning or overnight service.' }],
    image: IMAGES.standard,
    imageAlt: 'A commercial porta potty rental unit'
  }
};


export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  const content = serviceContentMap[params.slug] || { title: 'Service Not Found', description: '', features: [], useCases: '', faq: [], image: '', imageAlt: '' };
  
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
       <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{content.title} in Franklin, TN</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">{content.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold text-dark mb-4">Key Features</h2>
                    <ul className="list-none space-y-3 text-gray-700">
                        {content.features.map((feature: string, index: number) => 
                        <li key={index} className="flex items-start">
                            <span className="bg-secondary text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                            <span>{feature}</span>
                        </li>)}
                    </ul>
                    <div className="mt-8">
                        <Link href="/contact/" className="inline-block bg-accent text-dark font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                            Request a Quote
                        </Link>
                    </div>
                </div>
                 <div className="order-1 md:order-2">
                    <img src={content.image} alt={content.imageAlt} className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
            </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="my-16 bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Common Use Cases</h2>
            <p className="leading-relaxed text-lg">{content.useCases}</p>
        </div>

        <div>
            <h2 className="text-3xl font-bold text-dark text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
                {content.faq.map((item: {q: string, a: string}, index: number) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
                        <h3 className="font-semibold text-xl text-primary">{item.q}</h3>
                        <p className="mt-2 text-gray-600 text-lg">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </>
  );
}