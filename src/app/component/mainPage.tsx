"use client"; // Add this line at the top

import Image from "next/image";
import PhotographyTypes from "./photographyTypes";
import { CarouselSpacing } from "./carousel";
import ContactPage from "../contactus/page";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ContactSection from "../contactus/contactSection";
import { useEffect } from "react";

export default function MainPage() {
  useEffect(() => {
    const video = document.querySelector("video");

    const handleUserInteraction = () => {
      if (video) {
        video.muted = false;
        video.play();
      }
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Image and Video Background */}
      <section className="relative pt-20 w-full h-screen bg-cover bg-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full transform rotate-0"
          controls
          preload="auto"
        >
          <source
            src="/videos/Snapinsta.app_video_774E9975139BC1F2AE28367597CEEFBA_video_dashinit.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video cannot be loaded */}
          <Image
            src="/photos/201549.jpg"
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
          <h1 className="text-4xl font-bold sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-serif">
            Capture Every Moment
          </h1>
        </div>
      </section>


      <section>
        <PhotographyTypes />
      </section>

      <section>
        <CarouselSpacing />
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
          {/* Read More Button */}
          <div className="flex justify-center mt-6">
            <Link href="/abouteuspage">
              <button className="px-6 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <ContactSection />
      </section>
    </div>
  );
}
