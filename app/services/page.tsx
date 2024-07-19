import servicesData from "@/public/data/servicesData";
import { BrightSquares } from "@/public/images";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className='mb-40'>
      <div
        className="w-full py-24 bg-zinc-100"
        style={{ backgroundImage: `url(${BrightSquares.src})` }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">Services</h1>
        <p className="text-zinc-600 text-center">
          We keep your garden in full health
        </p>
      </div>
      <div className="mt-28 mx-auto max-w-screen-lg grid grid-cols-12 gap-10 px-3">
        {servicesData.map((obj: any, i: number) => (
          <div className="col-span-12 lg:col-span-6" key={i}>
            <Image
              src={obj.img}
              alt={obj.title}
              sizes="100vw"
              width="0"
              height="0"
              className="w-full aspect-video mb-4"
            />
            <h1 className="text-zinc-700 font-semibold text-lg mb-4">
              {obj.title}
            </h1>
            <p className="text-zinc-500 text-sm mb-7">{obj.desc}</p>
            <div className="text-lime-500 uppercase font-semibold text-sm">
              Read More
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
