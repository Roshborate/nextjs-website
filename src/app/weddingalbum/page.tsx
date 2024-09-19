import Image from 'next/image';
import MainPage from '../component/mainPage';
import WeddingPhotos from '../component/wedding/weddingPhotos';
import WeddingAlbums from '../component/wedding/weddingAlbum';

export default function Main() {
  return (
    <div className='wrapper'>
    <WeddingAlbums/>
    </div>
  );
}
