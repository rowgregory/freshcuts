import {
  BistroTerrace,
  ModernGarden,
  ThreePXTile,
  WalkoutPatio,
  WoodenDecks,
} from "@/public/images";
import Image from "next/image";
import React from "react";

const projectGallery = [
  {
    img: ModernGarden,
    title: "Garden,Terrace",
    text: "Modern Garden",
  },
  {
    img: WoodenDecks,
    title: "Garden",
    text: "Wooden Decks",
  },
  {
    img: BistroTerrace,
    title: "Terrace",
    text: "Bistro Terrace",
  },
  {
    img: WalkoutPatio,
    title: "Patio",
    text: "Walkout Patio",
  },
];

const ProjectGalleries = () => {
  return (
    <div
      className="bg-[#3c3c3c] w-full mt-20 mb-20 px-3 py-20 bg-center"
      style={{ backgroundImage: `url(${ThreePXTile.src})` }}
    >
      <div className="max-w-screen-xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">
          Project <span className="text-lime-400">Galleries</span>
        </h1>
        <p className="text-center text-zinc-400 text-sm mt-5 mb-8">
          With so many years of experience in the business, our company is your{" "}
          <br />
          source for the highest quality and landscaping service.
        </p>
        <div className="grid grid-cols-12 gap-8">
          {projectGallery.map((obj: any, i: number) => (
            <div className="col-span-12 md:col-span-3" key={i}>
              <Image
                src={obj.img}
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className="w-full"
              />
              <h6 className="mt-4 mb-2.5 font-semibold text-sm text-center uppercase text-lime-400">
                {obj.title}
              </h6>
              <h3 className="text-xl text-zinc-400 text-center font-bold">
                {obj.text}
              </h3>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default ProjectGalleries;
