import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read the privacy policy for ${BUSINESS_INFO.name}. Understand how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: '/privacy/',
  },
  robots: {
    index: false,
    follow: true,
  }
};

const pageUrl = `${BUSINESS_INFO.base_url}/privacy/`;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": "Privacy Policy",
      "isPartOf": {
        "@id": `${BUSINESS_INFO.base_url}/#website`
      }
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
          "name": "Privacy Policy",
          "item": pageUrl
        }
      ]
    }
  ]
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-4xl mx-auto">
            <h1>Privacy Policy</h1>
            <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

            <p>
                {BUSINESS_INFO.name} ("us", "we", or "our") operates the {BUSINESS_INFO.domain} website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
                We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
            </ul>

            <h2>Use of Data</h2>
            <p>
                {BUSINESS_INFO.name} uses the collected data for various purposes:
            </p>
            <ul>
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
                <li>By email: {BUSINESS_INFO.email}</li>
                <li>By phone number: {BUSINESS_INFO.phone}</li>
            </ul>
        </div>
      </div>
    </>
  );
}
