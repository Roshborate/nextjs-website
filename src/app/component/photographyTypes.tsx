// "use client"; // Add this line at the top if you're using Next.js 13 App Router

// import React from 'react';

// export default function PhotographyTypes() {
//   const photographyTypes = [
//     { name: 'Wedding Photography', image: '/photos/201549.jpg' },
//     { name: 'Corporate Photography', image: '/photos/201549.jpg' },
//     { name: 'Portrait Photography', image: '/photos/201549.jpg' },
//     { name: 'Event Photography', image: '/photos/201549.jpg' },
//     { name: 'Product Photography', image: '/photos/201549.jpg' },
//     { name: 'Fashion Photography', image: '/photos/201549.jpg' },
//     { name: 'Real Estate Photography', image: '/photos/201549.jpg' },
//     { name: 'Architectural Photography', image: '/photos/201549.jpg' },
//     { name: 'Street Photography', image: '/photos/201549.jpg' },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Types of Photography
//         </h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {photographyTypes.map((type) => (
//             <div key={type.name} className="overflow-hidden bg-white rounded-lg shadow-md">
//               <img
//                 src={type.image}
//                 alt={type.name}
//                 className="object-cover w-full h-48"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{type.name}</h3>
//                 {/* <p className="mt-2 text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat eros eget est aliquam bibendum.
//                 </p> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client"; // Add this line at the top if you're using Next.js 13 App Router

// import React from 'react';
// import Link from 'next/link'; // Import Link
// import Image from 'next/image';

// export default function PhotographyTypes() {
//   const photographyTypes = [
//     { name: 'Wedding Photography', image: '/photos/Wedding/abhi-meera-wedding/DSC00706.jpg', path: '/weddingalbum' }, // Add path to WeddingAlbums
//     { name: 'Pre Wedding Photography', image: '/photos/pre wedding/New folder/IMG_9748.jpg' },
//     { name: 'Baby Shoot', image: '/photos/Baby shoot/IMG_4716.jpg' },
//     { name: 'Maternity Shoot', image: '/photos/Maternity shoot/IMG_1014.jpg' },
//     { name: 'Engagement Photography', image: '/photos/enggement shoot/DSC04370.jpg' },
//     { name: 'Fashion Photography', image: '/photos/fashion/IMG_2631.jpg' },
//     { name: 'Real Estate Photography', image: '/photos/201549.jpg' },
//     { name: 'Architectural Photography', image: '/photos/201549.jpg' },
//     { name: 'Street Photography', image: '/photos/201549.jpg' },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Portfolio
//         </h2>
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {photographyTypes.map((type) => (
//             <Link href={type.path || '#'} key={type.name}> {/* Use Link for navigation */}
//               <div
//                 className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <Image
//                   src={type.image}
//                   alt={type.name}
//                   className="object-cover w-full h-48 rounded-t-xl"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {type.name}
//                   </h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client"; // Add this line at the top if you're using Next.js 13 App Router

import React from 'react';
import Link from 'next/link'; // Import Link
import Image from 'next/image';

export default function PhotographyTypes() {
  const photographyTypes = [
    { name: 'Wedding Photography', image: '/photos/Wedding/abhi-meera-wedding/DSC00706.jpg', path: '/weddingalbum' }, // Add path to WeddingAlbums
    { name: 'Pre Wedding Photography', image: '/photos/pre wedding/New folder/IMG_9748.jpg' },
    { name: 'Baby Shoot', image: '/photos/Baby shoot/IMG_4716.jpg' },
    { name: 'Maternity Shoot', image: '/photos/Maternity shoot/IMG_1014.jpg' },
    { name: 'Engagement Photography', image: '/photos/enggement shoot/DSC04370.jpg' },
    { name: 'Fashion Photography', image: '/photos/fashion/IMG_2631.jpg' },
    { name: 'Real Estate Photography', image: '/photos/201549.jpg' },
    { name: 'Architectural Photography', image: '/photos/201549.jpg' },
    { name: 'Street Photography', image: '/photos/201549.jpg' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {photographyTypes.map((type) => (
            <Link href={type.path || '#'} key={type.name}> {/* Use Link for navigation */}
              <div
                className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src={type.image}
                  alt={type.name}
                  width={600} // Add a reasonable width
                  height={400} // Add a reasonable height
                  className="object-cover w-full h-48 rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {type.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
