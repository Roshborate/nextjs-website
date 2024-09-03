"use client"; // Add this line at the top if you're using Next.js 13 App Router

import React from 'react';

export default function PhotographyTypes() {
  const photographyTypes = [
    { name: 'Wedding Photography', image: '/photos/201549.jpg' },
    { name: 'Corporate Photography', image: '/photos/201549.jpg' },
    { name: 'Portrait Photography', image: '/photos/201549.jpg' },
    { name: 'Event Photography', image: '/photos/201549.jpg' },
    { name: 'Product Photography', image: '/photos/201549.jpg' },
    { name: 'Fashion Photography', image: '/photos/201549.jpg' },
    { name: 'Real Estate Photography', image: '/photos/201549.jpg' },
    { name: 'Architectural Photography', image: '/photos/201549.jpg' },
    { name: 'Street Photography', image: '/photos/201549.jpg' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Types of Photography
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photographyTypes.map((type) => (
            <div key={type.name} className="overflow-hidden bg-white rounded-lg shadow-md">
              <img
                src={type.image}
                alt={type.name}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{type.name}</h3>
                {/* <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat eros eget est aliquam bibendum.
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
