
import Link from 'next/link';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              {BUSINESS_INFO.name}
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
             <a href={BUSINESS_INFO.phoneHref} className="text-sm font-medium text-dark hover:text-primary flex items-center">
                <FaPhoneAlt className="mr-2"/> {BUSINESS_INFO.phone}
             </a>
             <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm font-medium text-dark hover:text-primary flex items-center">
                 <FaEnvelope className="mr-2"/> {BUSINESS_INFO.email}
             </a>
          </div>
        </div>
        <nav className="hidden md:flex justify-center items-center border-t border-gray-200 py-2 space-x-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="text-base font-medium text-dark hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
           <Link href="/contact/" className="ml-8 bg-accent text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
              Get a Quote
            </Link>
        </nav>
      </div>
       {/* Mobile Nav Placeholder */}
       <div className="md:hidden flex justify-center py-2 border-t">
          <Link href="/contact/" className="bg-accent text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-500">
              Get a Quote
          </Link>
      </div>
    </header>
  );
}
