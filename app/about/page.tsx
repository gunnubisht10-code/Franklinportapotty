
import { Metadata } from 'next';
import { BUSINESS_INFO, IMAGES } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "About Joe Rental Works",
  description: `Learn about Joe Rental Works, Franklin's trusted provider of portable sanitation. Discover our commitment to quality, reliability, and customer satisfaction.`,
  alternates: {
    canonical: '/about/',
  },
};

const pageUrl = `${BUSINESS_INFO.base_url}/about/`;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": "About Joe Rental Works",
      "isPartOf": {
        "@id": `${BUSINESS_INFO.base_url}/#website`
      },
      "description": `Learn about Joe Rental Works, Franklin's trusted provider of portable sanitation. Discover our commitment to quality, reliability, and customer satisfaction.`
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
          "name": "About",
          "item": pageUrl
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schema} />
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={IMAGES.aboutBg} alt="Background image of porta potties" loading="lazy" />
          <div className="absolute inset-0 bg-primary opacity-80 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Joe Rental Works</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">Your Local Experts in Portable Sanitation Solutions</p>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-dark">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Joe Rental Works was founded right here in Franklin, Tennessee, with a straightforward mission: to provide the cleanest, most reliable, and customer-focused porta potty rental service in Williamson County. We saw a need for a local provider that treated every event, from a small backyard barbecue to a major music festival, with the same level of importance. Our founder, Joe, started with a single truck and a handful of units, built on a foundation of hard work, integrity, and a promise to always be on time.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we've grown into a leading supplier, but our core values remain unchanged. We are a family-owned business that takes immense pride in contributing to the success of our community's projects and celebrations. We understand the local landscape, the event venues, the construction regulations, and the unique needs of our neighbors because we are your neighbors.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src={IMAGES.team} alt="The Joe Rental Works team" className="rounded-lg shadow-2xl w-full" loading="lazy" />
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-dark text-center">Why Choose Us?</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white mx-auto">
                   <span className="text-3xl">✓</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">Unmatched Cleanliness</h3>
                <p className="mt-2 text-base text-gray-600">We adhere to a rigorous multi-point cleaning and sanitization process for every unit. Your guests' and workers' health and comfort are our top priority.</p>
              </div>
              <div className="text-center">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white mx-auto">
                    <span className="text-3xl">✓</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">Punctual & Reliable</h3>
                <p className="mt-2 text-base text-gray-600">We guarantee on-time delivery and pickup. When we give you a time, you can count on us to be there, ensuring your schedule runs smoothly.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white mx-auto">
                    <span className="text-3xl">✓</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-dark">Local Expertise</h3>
                <p className="mt-2 text-base text-gray-600">As a Franklin-based company, we have intimate knowledge of the area, allowing for efficient routing, placement, and adherence to all local ordinances.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
