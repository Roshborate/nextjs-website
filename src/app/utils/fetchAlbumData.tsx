// import path from 'path';
// import fs from 'fs';

// type AlbumData = {
//     albumName: string;
//     images: string[];
//     notFound?: boolean;
//   };
  

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



import path from 'path';
import fs from 'fs';

type AlbumData = {
    albumName: string;
    images: string[];
    notFound?: boolean;
  };
  

//   export async function fetchAlbumData(slug: string) {
//     const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);
  
//     let images: string[] = [];
//     try {
//       const imageFiles = fs.readdirSync(folderPath);
//       images = imageFiles.map((file) => `/photos/Wedding/${slug}/${file}`);
//     } catch (error) {
//       console.error('Error reading folder:', error);
//       return { notFound: true, albumName: '', images: [] }; // Return an empty albumName and empty array for images in case of error
//     }
  
//     const albumName = slug
//       .replace(/-/g, ' ')
//       .replace(/\b\w/g, (l) => l.toUpperCase());
  
//     return {
//       albumName,
//       images,
//     };
//   }
  
export async function fetchAlbumData(slug: string) {
    const folderPath = path.join(process.cwd(), 'public', 'photos', 'Wedding', slug);
  
    if (!fs.existsSync(folderPath)) {
      console.error('Folder does not exist:', folderPath);
      return { notFound: true };
    }
  
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
  