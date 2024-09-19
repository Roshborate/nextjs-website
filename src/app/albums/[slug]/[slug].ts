import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const { slug } = req.query;
  const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);

  try {
    const imageFiles = fs.readdirSync(folderPath);
    const images = imageFiles.map((file) => `/photos/Wedding/${slug}/${file}`);
    const albumName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

    res.status(200).json({ albumName, images });
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(404).json({ error: 'Album not found' });
  }
}
