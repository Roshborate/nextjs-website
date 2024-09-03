import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Our Photography Business!
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
            Welcome to our amazing photography business, where we’ve been capturing smiles and memories for 7 wonderful years! 📸 From fun family photos to awesome birthday parties, we love taking pictures that make people happy. Our team is great at making everyone feel comfortable in front of the camera. We use cool tools and have lots of experience to get the best shots. Whether it’s a special event or just a day out, we’ll make sure your photos look fantastic. Thanks for letting us be a part of your special moments! Let’s make some magic together! 🌟
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-200">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with us today to book your session or learn more about our services.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
