// "use client";

// import { useState } from 'react';
// import Image from 'next/image';

// type AlbumProps = {
//   albumName: string;
//   images: string[];
// };

// const AlbumPage = ({ albumName, images }: AlbumProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

//   const openModal = (index: number) => {
//     setCurrentImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentImageIndex(null);
//   };

//   const showPreviousImage = () => {
//     if (currentImageIndex !== null && currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   const showNextImage = () => {
//     if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-gray-100 py-8 px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">{albumName} Album</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {images.map((image, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg cursor-pointer" onClick={() => openModal(index)}>
//             <Image
//               src={image}
//               alt={`Image ${index + 1}`}
//               width={600}
//               height={400}
//               className="rounded-t-lg w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && currentImageIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative">
//             <button
//               className="absolute top-4 right-4 text-white text-2xl"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <button
//               className="absolute top-1/2 left-4 text-white text-2xl"
//               onClick={showPreviousImage}
//               disabled={currentImageIndex === 0}
//             >
//               &lt;
//             </button>
//             <button
//               className="absolute top-1/2 right-4 text-white text-2xl"
//               onClick={showNextImage}
//               disabled={currentImageIndex === images.length - 1}
//             >
//               &gt;
//             </button>
//             <Image
//               src={images[currentImageIndex]}
//               alt={`Image ${currentImageIndex + 1}`}
//               width={1200}
//               height={800}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlbumPage;



// "use client";

// import { useState } from "react";
// import Image from "next/image";

// type AlbumProps = {
//   albumName: string;
//   images: string[];
// };

// const AlbumPage = ({ albumName, images }: AlbumProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

//   const openModal = (index: number) => {
//     setCurrentImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentImageIndex(null);
//   };

//   const showPreviousImage = () => {
//     if (currentImageIndex !== null && currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   const showNextImage = () => {
//     if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 pt-24">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
//         {albumName} Album
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
//             onClick={() => openModal(index)}
//           >
//             <Image
//               src={image}
//               alt={`Image ${index + 1}`}
//               width={600}
//               height={400}
//               className="rounded-t-lg w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && currentImageIndex !== null && (
//         <div className="fixed pt-16 inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
//           <div className="relative w-full max-w-6xl p-4">
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-500 transition-transform transform hover:scale-110"
//               onClick={closeModal}
//             >
//               &times;
//             </button>

//             {/* Previous Button */}
//             <button
//               className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold p-2 bg-gray-700 rounded-full hover:bg-gray-900 transition-all ${
//                 currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               onClick={showPreviousImage}
//               disabled={currentImageIndex === 0}
//             >
//               &lt;
//             </button>

//             {/* Next Button */}
//             <button
//               className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold p-2 bg-gray-700 rounded-full hover:bg-gray-900 transition-all ${
//                 currentImageIndex === images.length - 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : ""
//               }`}
//               onClick={showNextImage}
//               disabled={currentImageIndex === images.length - 1}
//             >
//               &gt;
//             </button>

//             {/* Image Display */}
//             <Image
//               src={images[currentImageIndex]}
//               alt={`Image ${currentImageIndex + 1}`}
//               width={1200}
//               height={800}
//               className="rounded-lg object-contain w-full max-h-[80vh] transition-transform duration-500 ease-in-out"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlbumPage;


'use client';

import Image from 'next/image';
import { useState } from 'react';

type AlbumProps = {
  albumName: string;
  images: string[];
};

const AlbumPage = ({ albumName, images }: AlbumProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const showPreviousImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 pt-24">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        {albumName} Album
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => openModal(index)}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={600}
              height={400}
              className="rounded-t-lg w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentImageIndex !== null && (
        <div className="fixed pt-16 inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="relative w-full max-w-6xl p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-500 transition-transform transform hover:scale-110"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold p-2 bg-gray-700 rounded-full hover:bg-gray-900 transition-all ${
                currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={showPreviousImage}
              disabled={currentImageIndex === 0}
            >
              &lt;
            </button>

            {/* Next Button */}
            <button
              className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold p-2 bg-gray-700 rounded-full hover:bg-gray-900 transition-all ${
                currentImageIndex === images.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              onClick={showNextImage}
              disabled={currentImageIndex === images.length - 1}
            >
              &gt;
            </button>

            {/* Image Display */}
            <Image
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="rounded-lg object-contain w-full max-h-[80vh] transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumPage;
