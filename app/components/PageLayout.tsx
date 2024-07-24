import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react'
import MobileNavigation from './MobileNavigation';
import SideNavigation from './SideNavigation';

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);
  const close = () => setToggleMobileNavigation(false);

  return (
    <div className="flex w-full flex-col min-h-screen bg-white">
      <div className='lg:hidden block'>
        <FontAwesomeIcon onClick={() => setToggleMobileNavigation(!toggleMobileNavigation)}
          icon={faBars}
          className="text-slate-800 py-2 w-10 cursor-pointer z-20"
        />
      </div>
      <MobileNavigation
        toggleMobileNavigation={toggleMobileNavigation}
        close={close}
      />
      <div className="flex">
        <aside className="hidden lg:block lg:w-[240px] bg-[#fafafa]">
          <SideNavigation />
        </aside>
        <main className="max-w-screen-2xl w-full mx-auto">{children}</main>
      </div>
    </div>
  )
}

export default PageLayout