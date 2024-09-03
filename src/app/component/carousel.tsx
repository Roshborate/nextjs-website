// import * as React from "react";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselSpacing() {
//   // Example images - replace with your own image URLs
//   const images = [
//     "/photos/201555.jpg",
//     "/photos/201555.jpg",
//     "/photos/201555.jpg",
//     "/photos/201555.jpg",
//     "/photos/201555.jpg",
//   ];

//   return (
//     <Carousel className="w-full max-w-screen-lg mx-auto px-4">
//       <CarouselContent className="flex gap-4">
//         {images.map((src, index) => (
//           <CarouselItem key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
//             <div className="p-2">
//               <Card className="overflow-hidden">
//                 <CardContent className="relative w-full h-64">
//                   <Image
//                     src={src}
//                     alt={`Image ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-300 ease-in-out transform hover:scale-105"
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
//       <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
//     </Carousel>
//   );
// }



import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  // Example images - replace with your own image URLs
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  return (
    <Carousel className="w-full max-w-screen-lg mx-auto px-4">
      <CarouselContent className="flex gap-4">
        {images.map((src, index) => (
          <CarouselItem key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
            <div className="p-2">
              <Card className="overflow-hidden">
                <CardContent className="relative w-full h-64">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}
