import path from 'path';
import fs from 'fs';

export async function fetchAlbumData(slug: string) {
  const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);

  let images: string[] = [];
  try {
    const imageFiles = fs.readdirSync(folderPath);
    images = imageFiles.map((file) => `/photos/Wedding/${slug}/${file}`);
  } catch (error) {
    console.error('Error reading folder:', error);
    return { notFound: true };
  }

  const albumName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    albumName,
    images,
  };
}
