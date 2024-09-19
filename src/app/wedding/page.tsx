import Image from 'next/image';
import MainPage from '../component/mainPage';
import WeddingPhotos from '../component/wedding/weddingPhotos';

export default function Main() {
  return (
    <div className='wrapper'>
    <WeddingPhotos/>
    </div>
  );
}
