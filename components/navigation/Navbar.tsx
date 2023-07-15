"use client";
import Link from "next/link";
import { useRef } from "react";
import { Open_Sans } from "next/font/google";
import { useSelector } from "react-redux";

const font = Open_Sans({
  subsets: ["latin-ext"],
  display: "swap",
  preload: true,
  weight: ["400", "700"],
});
export default function Navbar(): JSX.Element {
  const menuBarRef = useRef<HTMLUListElement>(null);
  const diplayMenu = (): void => {
    menuBarRef.current?.classList.toggle("left-[120%]");
    menuBarRef.current?.classList.toggle("hidden");
    menuBarRef.current?.classList.toggle("flex");
  };
  return (
    <>
      <header className={font.className}>
        <nav className="flex justify-between items-center bg-slate-200 p-4 border-b-4 border-b-slate-400 z-50">
          <span className="logo font-semibold">MK STORE</span>
          <div
            className="p-3 scale-90 space-y-2 bg-gray-600 rounded shadow sm:hidden"
            role="dialog"
            onClick={diplayMenu}
          >
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
          </div>
          <ul className="hidden sm:flex justify-center items-center gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/cart">Cart 0</Link>
            </li>
            {/* Add useSelector hook from react-redux for dynamically change the number items present in Cart.  */}
          </ul>
        </nav>
        <ul
          className="hidden flex-col justify-center items-end py-5 px-4 gap-10 bg-slate-200 absolute left-[120%] w-full font-semibold overflow-hidden"
          ref={menuBarRef}
        >
          <li className="border-b border-black w-full text-end">
            <Link href="/">Home</Link>
          </li>
          <li className="border-b border-black w-full text-end">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="border-b border-black w-full text-end">
            <Link href="/cart">Cart 0</Link>
          </li>
          {/* Add useSelector hook from react-redux for dynamically change the number items present in Cart.  */}
        </ul>
      </header>
    </>
  );
}
