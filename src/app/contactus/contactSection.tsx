// import Link from 'next/link';
// import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// export default function ContactSection() {
//   return (
//     <section
//       className="relative w-full h-64 bg-cover bg-center"
//       style={{ backgroundImage: "url('photos/201555.jpg')" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         <Link href="/contactus">
//           <h1 className="text-4xl font-bold text-white sm:text-5xl hover:underline">
//             Contact Us
//           </h1>
//         </Link>

//         {/* Social Media Icons */}
//         <div className="flex space-x-4 mt-12">
//           <Link href="https://facebook.com/yourprofile" passHref>
//             <FaFacebookF className="text-white text-2xl hover:text-indigo-400" />
//           </Link>
//           <Link href="https://instagram.com/rosh_0003" passHref>
//             <FaInstagram className="text-white text-2xl hover:text-indigo-400" />
//           </Link>
//           <Link href="https://twitter.com/yourprofile" passHref>
//             <FaTwitter className="text-white text-2xl hover:text-indigo-400" />
//           </Link>
//           <Link href="https://wa.me/8369475295" passHref>
//             <FaWhatsapp className="text-white text-2xl hover:text-indigo-400" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const whatsappUrl = `https://wa.me/8369475295?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Opens WhatsApp chat with the message
    setIsModalOpen(false); // Close the modal after sending
  };

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
          {/* <h1 className="text-4xl font-bold text-white sm:text-5xl hover:underline">
            Contact Us
          </h1> */}
          <h1 className="text-4xl font-bold text-white sm:text-5xl animate-bounce cursor-pointer">
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
          <button onClick={() => setIsModalOpen(true)} aria-label="Open WhatsApp modal">
            <FaWhatsapp className="text-white text-2xl hover:text-indigo-400" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 space-y-4 max-w-lg mx-auto">
            <h2 className="text-xl font-bold">Send a WhatsApp Message</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="w-full border-gray-300 rounded-lg p-2 mt-1"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

