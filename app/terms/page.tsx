import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import JsonLd from '@/components/JsonLd';

export const dynamic = 'error';
export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Review the terms of service for using the ${BUSINESS_INFO.name} website and services.`,
  alternates: {
    canonical: '/terms/',
  },
  robots: {
    index: false,
    follow: true,
  }
};

const pageUrl = `${BUSINESS_INFO.base_url}/terms/`;
const schema = {
  "@context": "https://schema.org",
  "@graph": [
     {
      "@type": "WebPage",
      "@id": pageUrl,
      "url": pageUrl,
      "name": "Terms of Service",
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
          "name": "Terms of Service",
          "item": pageUrl
        }
      ]
    }
  ]
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose max-w-4xl mx-auto">
            <h1>Terms of Service</h1>
            <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

            <h2>1. Introduction</h2>
            <p>
                Welcome to {BUSINESS_INFO.name}. These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at {BUSINESS_INFO.domain} (together or individually "Service") operated by {BUSINESS_INFO.name}.
            </p>
            <p>
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
            </p>

            <h2>2. Communications</h2>
            <p>
                By using our Service, you agree to subscribe to newsletters, marketing or promotional materials, and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing us at {BUSINESS_INFO.email}.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of {BUSINESS_INFO.name} and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            
            <h2>4. Disclaimer</h2>
            <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>

            <h2>5. Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of Tennessee, United States, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us at {BUSINESS_INFO.email}.
            </p>
        </div>
      </div>
    </>
  );
}
