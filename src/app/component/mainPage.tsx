import Image from 'next/image';
import PhotographyTypes from './photographyTypes';
import { CarouselSpacing } from './carousel';
import ContactPage from '../contactus/page';

export default function MainPage() {
    return (
        <div className="min-h-screen bg-gray-100">
          {/* Hero Section with Image and Video Background */}
          <section className="relative w-full h-screen bg-cover bg-center">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src={"/videos/92436.mp4"} type="video/mp4" />
              {/* Fallback image if video cannot be loaded */}
              <Image
                src={"/photos/201549.jpg"}
                alt="Hero Background Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </video>
    
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
    
            {/* Hero Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <h1 className="text-4xl font-bold text-white sm:text-6xl">
                Capture Every Moment
              </h1>
            </div>
          </section>
    
          {/* Portfolio Gallery */}
          <section className="py-16 bg-white">
            <div className="container px-4 mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center">Portfolio</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Example Images */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={"/photos/201549.jpg"}
                    alt="Portfolio Image 1"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={"/photos/201549.jpg"}
                    alt="Portfolio Image 2"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Add more images as needed */}
              </div>
            </div>
          </section>

          <section>
            <PhotographyTypes/>
          </section>


          <section>
            <CarouselSpacing/>
          </section>
    
          {/* About Section */}
          <section className="py-16 bg-gray-200">
            <div className="container px-4 mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-center">About Me</h2>
              <p className="max-w-2xl mx-auto text-center">
                I am a passionate photographer who loves capturing the beauty of
                life in every shot. My work is a blend of creativity and technical
                skill, aiming to tell a story through every image.
              </p>
            </div>
          </section>
    
          {/* Contact Form */}
          <section className="">
            <ContactPage/>
          </section>
        </div>
      );
}
