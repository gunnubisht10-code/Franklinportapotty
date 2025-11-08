import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';
import ContactPageComponent from '@/components/ContactPageComponent';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact Us - Joe Rental Works",
  description: `Get in touch with Joe Rental Works for a free quote on porta potty rentals in Franklin, TN. Call us or fill out our contact form for fast service.`,
  alternates: {
    canonical: '/contact/',
  },
};

const pageUrl = `${BUSINESS_INFO.base_url}/contact/`;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": "Contact Joe Rental Works",
      "isPartOf": {
        "@id": `${BUSINESS_INFO.base_url}/#website`
      },
      "description": `Contact Joe Rental Works for reliable porta potty rentals. We are available 24/7.`
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
          "name": "Contact",
          "item": pageUrl
        }
      ]
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ContactPageComponent />
    </>
  );
}
