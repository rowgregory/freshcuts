'use client'

import { Buried, DevelopedBy } from "@/public/images";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const extraNavigationData = [
  {
    linkKey: '/',
    textKey: 'Home'
  },
  {
    linkKey: '/free-estimage',
    textKey: 'Free Estimate'
  },
  {
    linkKey: '/services',
    textKey: 'Services'
  },
  {
    linkKey: '/contact',
    textKey: 'Contact'
  },
]


const Footer = () => {
  return (
    <div
      className="bg-[#3c3c3c] w-full bg-center"
      style={{ backgroundImage: `url(${Buried.src})` }}
    >
      <div className="w-full max-w-screen-xl px-3 py-20 mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="text-white text-xl font-bold mb-5">About Us</h3>
            <p className='text-sm text-zinc-500'>
              Our team at pH Lawn Care is dedicated to finding solutions to your
              lawn care and pest control problems so you’ll have a beautiful
              landscape for years to come.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="text-white text-xl font-bold mb-5">
              Extra Navigation
            </h3>
            {extraNavigationData.map((obj: any, i: number) => (
              <div key={i} className='flex items-center mb-4'>
                <FontAwesomeIcon icon={faArrowRight} className='w-3 mr-4 text-zinc-500' />
                <Link href={obj.linkKey} className='text-sm text-zinc-500'>{obj.textKey}</Link>
              </div>
            ))}
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="text-white text-xl font-bold mb-5">Our Services</h3>
            <div className='flex items-center mb-4'>
              <FontAwesomeIcon icon={faArrowRight} className='w-3 mr-4 text-zinc-500' />
              <Link href='/' className='text-sm text-zinc-500'>See all Services</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-3 py-6 bg-[#292929]">
        <div className='max-w-screen-xl flex items-center justify-between mx-auto'>
          <p className='text-sm text-zinc-500'>
            © {new Date().getFullYear()} ph Lawn Care
          </p>
          <a href="tel:19783568856" className='text-sm text-zinc-500'>978-356-8856 </a>
        </div>
      </div>
      <div onClick={() => window.open('https://www.sqysh.io', '_blank')} className="w-full px-3 py-2 bg-[#121212]">
        <div className='flex justify-center items-center cursor-pointer'>
          <p className='text-xs text-white mr-2'>Developed by{" "}</p>
          <Image src={DevelopedBy} alt='Sqysh' width='0' height='0' sizes='100vw' className='w-24' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
