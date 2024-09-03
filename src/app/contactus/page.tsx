import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('photos/201555.jpg')" }}>
        <div className="absolute text-center inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            We would love to hear from you! Please fill out the form below to get in touch with us.
          </p>
          <form className="max-w-lg mx-auto space-y-4">
            <div>
              <label className="block mb-1 text-sm font-bold text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border rounded shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border rounded shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-bold text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4} // Change here
                required
                className="w-full px-3 py-2 border rounded shadow-sm border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea>

            </div>
            <button
              type="submit"
              className="w-full py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-200">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our Contact Information
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Feel free to reach out to us through the following methods:
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-800">
              <strong>Email:</strong> <a href="mailto:info@yourdomain.com" className="text-indigo-600 hover:underline">info@yourdomain.com</a>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+123-456-7890</a>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Address:</strong> 1234 Photography St, Suite 567, City, Country
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
