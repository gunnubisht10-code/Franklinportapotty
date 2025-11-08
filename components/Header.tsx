import Link from 'next/link';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          <div className="text-sm">
            Your Trusted Local Porta Potty Provider
          </div>
          <div className="flex items-center space-x-4">
            <a href={BUSINESS_INFO.phoneHref} className="text-sm font-medium flex items-center hover:text-accent transition-colors">
              <FaPhoneAlt className="mr-2 h-4 w-4"/> {BUSINESS_INFO.phone}
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="hidden sm:flex text-sm font-medium items-center hover:text-accent transition-colors">
              <FaEnvelope className="mr-2 h-4 w-4"/> {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl lg:text-3xl font-bold text-primary hover:text-opacity-80 transition-colors">
              {BUSINESS_INFO.name}
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-base font-medium text-dark hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link href="/contact/" className="bg-accent text-dark font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
              Get a Free Quote
            </Link>
          </div>
           {/* Mobile Menu Button - can be implemented later */}
          <div className="md:hidden">
             <Link href={BUSINESS_INFO.phoneHref} className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                Call Now
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}