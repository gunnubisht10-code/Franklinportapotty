
import { BUSINESS_INFO } from '@/lib/constants';
import { FaPhoneAlt } from 'react-icons/fa';

export default function StickyCallButton() {
  return (
    <a
      href={BUSINESS_INFO.phoneHref}
      className="md:hidden fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
      aria-label="Call Now"
    >
      <FaPhoneAlt size={24} />
    </a>
  );
}
