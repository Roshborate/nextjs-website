// import fs from 'fs';
// import path from 'path';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

// type AlbumProps = {
//   albumName: string;
//   images: string[];
// };

// const AlbumPage = ({ albumName, images }: AlbumProps) => {
//   return (
//     <div className="min-h-screen pt-20 bg-gray-100 py-8 px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">{albumName} Album</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {images.map((image, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg">
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
//     </div>
//   );
// };

// // Fetch static paths
// export async function generateStaticParams() {
//   const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding');
//   const folders = fs.readdirSync(folderPath);

//   return folders.map((folder) => ({
//     slug: folder,
//   }));
// }

// // Fetch data for the specific album
// export async function fetchAlbumData(slug: string) {
//   const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);

//   let images: string[] = [];
//   try {
//     const imageFiles = fs.readdirSync(folderPath);
//     images = imageFiles.map((file) => `/photos/Wedding/${slug}/${file}`);
//   } catch {
//     return { notFound: true };
//   }

//   const albumName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

//   return {
//     albumName,
//     images,
//   };
// }

// // Main page component
// export default async function Page({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   const data = await fetchAlbumData(slug);

//   if (data.notFound) {
//     return notFound();
//   }

//   return <AlbumPage {...data} />;
// }




// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

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

// // Static generation functions
// export async function generateStaticParams() {
//   const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding');
//   const folders = fs.readdirSync(folderPath);

//   return folders.map((folder) => ({
//     slug: folder,
//   }));
// }

// export async function fetchAlbumData(slug: string) {
//   const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);

//   let images: string[] = [];
//   try {
//     const imageFiles = fs.readdirSync(folderPath);
//     images = imageFiles.map((file) => `/photos/Wedding/${slug}/${file}`);
//   } catch (error) {
//     console.error('Error reading folder:', error);
//     return { notFound: true };
//   }

//   const albumName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

//   return {
//     albumName,
//     images,
//   };
// }

// // Main page component
// export default async function Page({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   console.log('Fetching data for slug:', slug);

//   const data = await fetchAlbumData(slug);
//   console.log('Fetched data:', data);

//   if (data.notFound) {
//     return notFound();
//   }

//   return <AlbumPage {...data} />;
// }




// import path from 'path';
// import fs from 'fs';
// import { notFound } from 'next/navigation';
// import AlbumPage from '@/app/component/wedding/AlbumPage';

// // Static generation functions
// export async function generateStaticParams() {
//   const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding');
//   const folders = fs.readdirSync(folderPath);

//   return folders.map((folder) => ({
//     slug: folder,
//   }));
// }

// export async function fetchAlbumData(slug: string) {
//   const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);

//   let images: string[] = [];
//   try {
//     const imageFiles = fs.readdirSync(folderPath);
//     images = imageFiles.map((file) => `/photos/Wedding/${slug}/${file}`);
//   } catch (error) {
//     console.error('Error reading folder:', error);
//     return { notFound: true };
//   }

//   const albumName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

//   return {
//     albumName,
//     images,
//   };
// }

// // Main page component
// export default async function Page({ params }: { params: { slug: string } }) {
//   const { slug } = params;
//   console.log('Fetching data for slug:', slug);

//   const data = await fetchAlbumData(slug);
//   console.log('Fetched data:', data);

//   if (data.notFound) {
//     return notFound();
//   }

//   return <AlbumPage {...data} />;
// }



import { notFound } from 'next/navigation';
import AlbumPage from '@/app/component/wedding/AlbumPage';
import { fetchAlbumData } from '@/app/utils/fetchAlbumData';
import path from 'path';

// Static generation functions
export async function generateStaticParams() {
  const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding');
  const folders = fs.readdirSync(folderPath);

  return folders.map((folder) => ({
    slug: folder,
  }));
}

// Main page component
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log('Fetching data for slug:', slug);

  const data = await fetchAlbumData(slug);
  console.log('Fetched data:', data);

  if (data.notFound) {
    return notFound();
  }

  return <AlbumPage {...data} />;
}
