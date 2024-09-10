import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('photos/201555.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Link href="/contactus">
          <h1 className="text-4xl font-bold text-white sm:text-5xl hover:underline">
            Contact Us
          </h1>
        </Link>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-12">
          <Link href="https://facebook.com/yourprofile" passHref>
            <FaFacebookF className="text-white text-2xl hover:text-indigo-400" />
          </Link>
          <Link href="https://instagram.com/rosh_0003" passHref>
            <FaInstagram className="text-white text-2xl hover:text-indigo-400" />
          </Link>
          <Link href="https://twitter.com/yourprofile" passHref>
            <FaTwitter className="text-white text-2xl hover:text-indigo-400" />
          </Link>
          <Link href="https://wa.me/8369475295" passHref>
            <FaWhatsapp className="text-white text-2xl hover:text-indigo-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
