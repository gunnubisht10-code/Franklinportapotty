
import Link from 'next/link';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-400">Your trusted partner for portable sanitation solutions in Franklin, TN and surrounding areas. Fast, clean, and reliable service 24/7.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-white">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                 <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-400">We are available for delivery, service, and support 24 hours a day, 7 days a week.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
              <Link href="/privacy/" className="hover:text-white">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
