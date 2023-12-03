import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  getUserFromLocalStorage,
  clearLocalStorage,
} from "@/utils/localStorage";

import { BsPersonFill } from "react-icons/bs";
import { MENU_ITEMS_USER } from "@/constant/menu";
import profile from "@/public/images/empty_profile.png";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const user = getUserFromLocalStorage();
  const role = user?.length > 0 ? user[0].level : "";
  const isLogin = user?.length > 0 ? true : false;

  const onHandleLogout = () => {
    clearLocalStorage();
    router.push("/auth/login");
  };

  return (
    <>
      <div className="md:container sm:container p-3">
        <div className="navbar">
          <div className="navbar-start pl-5">
            <Link href="/">
              <Image height={65} width={65} src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex bg-[#FFCEA0] rounded-lg px-8">
            <ul className="menu menu-horizontal text-black">
              {MENU_ITEMS_USER.map((item) => (
                <li
                  key={item.name}
                  className={`px-8 ${
                    pathname === item.link ? "bg-orange-300 rounded-lg" : ""
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            {!isLogin ? (
              <div className="bg-[#FBBA74] py-2 px-5 rounded-lg">
                <Link
                  href={"/auth/login"}
                  className="flex gap-3 justify-center items-center"
                >
                  <BsPersonFill size={20} />
                  <span>Login</span>
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar bg-[#FFCEA0]"
                  suppressHydrationWarning={true}
                >
                  <Image
                    src={profile}
                    alt="profile"
                    className="w-10 rounded-full"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {role === "user" && (
                    <li>
                      <Link href="/dashboard/user/profile">Profil</Link>
                      <Link href="/dashboard/user/pesanan">
                        Riwayat Pesanan
                      </Link>
                      <button onClick={onHandleLogout}>Logout</button>
                    </li>
                  )}
                  {role === "admin" && (
                    <li>
                      <Link href="/dashboard/admin">Dashboard</Link>
                      <button onClick={onHandleLogout}>Logout</button>
                    </li>
                  )}
                  {role === "penjual" && (
                    <li>
                      <Link href="/dashboard/penjual">Dashboard</Link>
                      <button onClick={onHandleLogout}>Logout</button>
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[10] shadow bg-base-100 rounded-box w-36"
              >
                {MENU_ITEMS_USER.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}