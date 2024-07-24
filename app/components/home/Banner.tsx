'use client'

import { BannerLoading } from '@/public/images';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null) as any;

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoad);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoad);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[730px]">
      {loading && (
        <Image
          src={BannerLoading}
          alt="Loading banner"
          className="block w-full h-full object-cover absolute top-0 left-0 z-0"
          priority
          width='0'
          height='0'
          sizes='100vw'
        />
      )}
      <video
        ref={videoRef}
        className="block w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex-col w-full h-full flex items-center justify-center bg-black/40">

        <p className="text-lime-400 uppercase mb-1 text-lg whitespace-nowrap font-semibold tracking-widest">
          Quality that is guranteed
        </p>

        <p className="text-white text-4xl font-bold tracking-wider mb-16 px-16">
          Your lawn and landscape <br /> the way it should be
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/services"
            className="px-6 py-3 uppercase text-white border-2 text-sm bg-lime-500 border-lime-500 font-bold hover:bg-lime-500 duration-200"
          >
            See Our Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 uppercase text-white border-2 text-sm border-gray-300 font-bold hover:bg-gray-300 duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
