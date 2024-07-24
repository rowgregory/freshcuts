"use client";

import { Logo } from "@/public/images";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { persistor, RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { resetAuth } from "@/redux/features/auth/authSlice";
import sideNavigationLinkData from "@/public/data/sideNavigationLinkData";
import { resetInvoice } from '@/redux/features/invoice/invoiceSlice';

const SideNavigation = () => {
  const params = usePathname();
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    persistor.purge();
    dispatch(resetAuth());
    dispatch(resetInvoice());
    navigate.push("/auth/login");
  };

  return (
    <div className="w-[240px] min-h-screen flex flex-col justify-between">
      <div>
        <div className="px-4 pt-5 mb-10">
          <Link href="/">
            <Image
              src={Logo}
              alt="Lincolns Landing"
              className="object-contain w-28"
              priority
            />
          </Link>
        </div>
        {sideNavigationLinkData(params?.split("/")[2], auth.isAdmin).map(
          (obj: any, i: number) => (
            <div
              key={i}
              className={`${obj.isActive
                ? "text-zinc-800 bg-lime-400"
                : "text-zinc-400"
                } duration-200 hover:bg-lime-400 grid grid-cols-9 mx-6 px-4 py-2.5 mb-2 rounded-md items-center group`}
            >
              <FontAwesomeIcon
                icon={obj.icon}
                className={`${obj?.isActive
                  ? 'text-slate-800 '
                  : 'text-zinc-400'
                  } col-span-2 duration-200 group-hover:text-zinc-800`}
              />
              <Link
                className={`${obj.isActive ? "text-zinc-800" : "text-zinc-400"
                  } col-span-7 duration-200 group-hover:text-zinc-900 text-sm`}
                href={obj.linkKey}
              >
                {obj.textKey}
              </Link>
            </div>
          )
        )}
      </div>
      <Link href='/auth/login'
        onClick={handleLogout}
        className="duration-200 mb-28 hover:bg-lime-400 grid grid-cols-9 mx-6 px-4 py-2.5 rounded-md items-center group cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className={`col-span-2 text-zinc-400 duration-200 text-sm group-hover:text-zinc-800`}
        />
        <p className="col-span-7 text-zinc-400 duration-200 group-hover:text-zinc-900 text-sm">
          Logout
        </p>
      </Link>
    </div>
  );
};

export default SideNavigation;
