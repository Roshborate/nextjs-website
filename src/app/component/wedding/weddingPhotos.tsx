"use client"; // Add this line at the top if you're using Next.js 13 App Router

import React, { useState } from 'react';

export default function WeddingPhotos() {
  const photos = [
    { id: 1, image: '/photos/Wedding/New folder/_MG_4569.jpg' },
    { id: 2, image: '/photos/Wedding/New folder/_MG_4576.jpg' },
    { id: 3, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 4, image: '/photos/Wedding/New folder/_MG_4583.jpg' },
    { id: 5, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 6, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 7, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 8, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 9, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 10, image: '/photos/Wedding/New folder/_MG_4579.jpg' },
    { id: 11, image: '/photos/Wedding/New folder/_MG_4579.jpg' },

  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to track the selected photo
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if modal is open
  const [currentIndex, setCurrentIndex] = useState(0); // Current index for the selected photo

  // Function to handle photo click (open modal)
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index]);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  // Function to go to the next photo
  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  // Function to go to the previous photo
  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  return (
    <section className="py-12 bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Wedding Photos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative overflow-hidden bg-white rounded-lg shadow-md group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={photo.image}
                alt={`Wedding Photo ${photo.id}`}
                className="object-cover w-full h-48 transition-transform duration-300 transform group-hover:scale-110"
              />
              {/* Full-size preview on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={photo.image}
                  alt={`Preview Wedding Photo ${photo.id}`}
                  className="object-contain max-w-xs max-h-60"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative max-w-full max-h-screen overflow-hidden p-4">
              <button
                onClick={closeModal}
                className="absolute top-20 right-6 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
              >
                &times;
              </button>
              <img
                src={selectedPhoto.image}
                alt={`Selected Wedding Photo ${selectedPhoto.id}`}
                className="w-full pt-14 pb-6 max-w-screen-md max-h-screen object-contain" // Added object-contain for consistent scaling
              />
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevPhoto}
                  className="text-white text-4xl bg-black p-3 rounded-full focus:outline-none"
                >
                  &#8249;
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextPhoto}
                  className="text-white text-4xl bg-black p-3 rounded-full focus:outline-none"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}