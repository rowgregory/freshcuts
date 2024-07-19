import Link from "next/link";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import servicesData from '@/public/data/servicesData';



const Services = () => {
  return (
    <div className="mt-16 mx-auto w-full px-3">
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12  lg:col-span-4 px-7 py-9 border-4 border-zinc-100">
          <h1 className="text-3xl">
            Exceptional <br />
            <span className="text-lime-500 font-bold">Services We Offer</span>
            <div className="w-full h-[2px] mt-5 mb-8 bg-zinc-100"></div>
            <p className="text-sm text-zinc-500">
              We provide exceptional landscaping services to a wide range of
              commercial and residential properties for over 35 years, including
              large corporate environments, city parks, shopping malls and
              appartments. Our experienced landscapers set the standard each day
              in landscape design, paving, hardscaping. We will whip your yard
              into shape in no time.
            </p>
            <Link
              href="/server"
              className="text-lime-500 uppercase text-sm flex font-bold items-center mt-7"
            >
              See All Services
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-2 text-sm w-2"
              />
            </Link>
          </h1>
        </div>

        {servicesData.map((obj: any, i: number) => (
          <div className="col-span-12 lg:col-span-2" key={i}>
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
            <Link
              href="/services"
              className="text-lime-500 uppercase font-semibold text-sm"
            >
              Find Out More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
