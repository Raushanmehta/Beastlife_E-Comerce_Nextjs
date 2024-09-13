"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { PiQrCodeBold } from "react-icons/pi";
import { PiShoppingCartFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navbarlink = [
    
    {
      label: "Products",
      link: "/products",
    },
    {
      label: "Our Story",
      link: "/story",
    },
    {
      label: "Authenticity Guaranteed",
      link: "/authenticity",
    },
    {
      label: "Our Blog",
      link: "/blog",
    },
    {
      label: "Track My Order",
      link: "/order-track",
    },
  ];

  return (
    <div>
      <nav className="flex flex-col p-2 sticky top-0 bg-[#231F1F] text-white">
        <div className="flex flex-row items-center md:px-24 ">
          <div className="flex items-center w-full lg:w-auto">
               <div className="text-2xl font-bold">
                  <Image src="/assets/beastlife-whitelogo.png" height={130} width={130} alt="logo"/>
                </div>
            </div>

              <div className="relative w-full max-w-lg my-4 lg:my-0 lg:mx-auto">
                <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-md text-black"/>
              </div>
                 <button onClick={toggleSidebar} className="text-2xl lg:hidden focus:outline-none"><FiMenu/></button>
                   <div className="hidden lg:flex space-x-4 text-3xl font-semibold">
             <Link href="/authenticity"><PiQrCodeBold /></Link>
            <Link href="/"><CiUser className=""/></Link>
            <Link href="/"><PiShoppingCartFill /></Link>
          </div>

        </div>

        {/* Navbar links centered below the search bar, hidden on small screens */}
        <div className="hidden lg:flex w-full font-semibold lg:w-auto justify-center space-x-4">
          {navbarlink.map((d, i) => (
            <a
              key={i}
              href={d.link}
              className="text-gray-200 hover:text-[#BDDD01] transition-all px-2 py-2"
            >
              {d.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        className={`fixed top-[13.1%] left-0 h-full w-[100%] bg-[#231F1F] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <div className="flex flex-col p-4">
          {navbarlink.map((d, i) => (
            <a
              key={i}
              href={d.link}
              className="font-bold px-2 py-4 items-center flex"
            >
              {d.label}
            </a>
          ))}
        </div>
      </div>
      
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Navbar;