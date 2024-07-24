import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/public/images';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faTimes } from '@fortawesome/free-solid-svg-icons';
import { persistor, RootState, useAppDispatch, useAppSelector } from '@/redux/store';
import { resetAuth } from '@/redux/features/auth/authSlice';
import sideNavigationLinkData from '@/public/data/sideNavigationLinkData';
import { resetInvoice } from '@/redux/features/invoice/invoiceSlice';

const MobileNavigation = ({ toggleMobileNavigation, close }: any) => {
  const auth = useAppSelector((state: RootState) => state.auth);
  const params = usePathname();
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleLogout = () => {
    close()
    persistor.purge();
    dispatch(resetAuth());
    dispatch(resetInvoice());
    navigate.push('/auth/login');
  };

  return (
    <div
      className={`${toggleMobileNavigation
        ? 'w-screen left-0 overflow-hidden'
        : 'left-[-100vw] w-none'
        } fixed duration-200 min-h-screen bg-white top-0 left-0 flex flex-col items-center justify-center z-[60]`}
    >
      <FontAwesomeIcon
        onClick={close}
        icon={faTimes}
        className="text-zinc-800 top-4 right-4 absolute cursor-pointer"
      />
      <Link href='/'>
        <Image
          onClick={close}
          src={Logo}
          className="w-40 duration-200 cursor-pointer mb-4"
          alt="Lincolns Landing"
        />
      </Link>
      {sideNavigationLinkData(params?.split("/")[2], auth.isAdmin).map((obj: any, i: number) => (
        <div onClick={close}
          key={i}
          className={`${obj.isActive
            ? "text-zinc-800 bg-lime-400"
            : "text-zinc-400"
            } duration-200 hover:bg-lime-400 grid grid-cols-9 w-full mx-6 px-4 py-4 items-center group`}
        >
          <FontAwesomeIcon
            icon={obj.icon}
            className={`${obj?.isActive
              ? 'text-slate-800 '
              : 'text-zinc-400'
              } col-span-1 duration-200 group-hover:text-zinc-800`}
          />
          <Link
            className={`${obj.isActive ? "text-zinc-800" : "text-zinc-400"
              } col-span-8 duration-200 group-hover:text-zinc-900 text-sm`}
            href={obj.linkKey}
          >
            {obj.textKey}
          </Link>
        </div>
      ))}
      <Link href='/auth/login'
        onClick={handleLogout}
        className="duration-200 mb-28 hover:bg-lime-400 grid grid-cols-9 mx-6 px-4 py-2.5 items-center group cursor-pointer w-full"
      >
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className={`col-span-1 text-zinc-400 duration-200 text-sm group-hover:text-zinc-800`}
        />
        <p className="col-span-8 text-zinc-400 duration-200 group-hover:text-zinc-900 text-sm">
          Logout
        </p>
      </Link>
    </div>
  );
};

export default MobileNavigation;
