import { Logo } from "@/public/images";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useState } from "react";
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const pathname = usePathname();
  const shouldHide = ['admin', 'invoices'].some(path => pathname.includes(path));
  const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);
  const close = () => setToggleMobileNavigation(false);

  return (
    <div className={`${shouldHide ? 'hidden' : 'flex'} bg-[#3a3a3a] h-[88px] w-full p-3`}>
      <MobileNavigation
        toggleMobileNavigation={toggleMobileNavigation}
        close={close}
      />
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
                src={Logo}
                alt="Freshcuts"
                width="0"
                height="0"
                sizes="100vw"
                className="object-contain h-[70px] w-[234px]"
              />
            </Link>
          </div>
          <div
            className="bg-lime-500 w-full max-w-[850px] h-full flex items-center justify-center ml-8"
            style={{ clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          >
            <div className="hidden lg:flex itmes-center gap-x-16">
              <Link href="/" className='font-bold text-white'>Home</Link>
              <Link href="/free-estimate" className='font-bold text-white'>Free Estimate</Link>
              <Link href="/services" className='font-bold text-white'>Services</Link>
              <Link href="/auth/login" className='font-bold text-white'>Login</Link>
            </div>
            <FontAwesomeIcon onClick={() => setToggleMobileNavigation(true)} icon={faBars} className='text-white fa-xl block lg:hidden' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
