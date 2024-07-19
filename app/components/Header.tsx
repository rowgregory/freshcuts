import { Logo2 } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#3a3a3a] h-[88px] w-full flex p-3">
      <div className="max-w-screen-xl w-full mx-auto">
        <section className="flex items-center mb-1">
          <p className="text-sm text-[#7c7c7c]">
            Providing Exceptional Landscaping
          </p>
        </section>
        <section className="h-[90px] bg-white w-full relative z-20 flex items-center justify-between">
          <div className='w-[400px]'>
            <Link href='/'>
              <Image
                src={Logo2}
                alt="ph Lawn Care"
                width="0"
                height="0"
                sizes="100vw"
                className="object-contain h-[70px] w-[234px]"
              />
            </Link>
          </div>
          <div
            className="bg-lime-500 w-full max-w-[850px] h-full flex items-center justify-center ml-8 gap-x-16"
            style={{ clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <Link href="/" className='font-bold text-white'>Home</Link>
            <Link href="/free-estimate" className='font-bold text-white'>Free Estimate</Link>
            <Link href="/services" className='font-bold text-white'>Services</Link>
            <Link href="/contact" className='font-bold text-white'>Contact</Link>
            <Link href="/auth/login" className='font-bold text-white'>Login</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
