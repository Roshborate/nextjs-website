import Link from 'next/link';

const folders = [
  {
    name: "Sahil & Kajal Wedding",
    slug: "sahil-kajal-wedding",
    coverImage: "/photos/Wedding/sahil-kajal-wedding/_MG_4569.jpg", // Replace with actual cover image path
  },
  {
    name: "Ram & Sita Wedding",
    slug: "ram-sita-wedding",
    coverImage: "/photos/Wedding/ram-sita-wedding/_MG_8598.jpg", // Replace with actual cover image path
  },
  {
    name: "Abhi & Meera Wedding",
    slug: "abhi-meera-wedding",
    coverImage: "/photos/Wedding/abhi-meera-wedding/DSC00332.jpg", // Replace with actual cover image path
  },
  {
    name: "Mihir & Vish Wedding",
    slug: "mihir-vish-wedding",
    coverImage: "/photos/Wedding/mihir-vish-wedding/DSC03221.jpg", // Replace with actual cover image path
  },
  // Add more folders here
];

const WeddingAlbums = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Wedding Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {folders.map((folder) => (
          <Link key={folder.slug} href={`/albums/${folder.slug}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={folder.coverImage}
                alt={folder.name}
                className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-6 bg-gradient-to-t from-gray-900 to-transparent">
                <h2 className="text-2xl font-semibold text-white">{folder.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeddingAlbums;
