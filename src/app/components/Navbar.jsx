"use client";
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-90">
      <div className="flex flex-wrap item-center justify-between mx-auto px-8 py-4">
        <Link href={"/"} className="text-lg md:text-2xl font-semibold">
          <Image src="/images/logo2.png" width={50} height={30} alt="logo" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button 
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-slate-400 hover:border-slate-400">
                <Bars3Icon className="h-5 w-5"/>
            </button>
          ) : (
            <button 
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-slate-400 hover:border-slate-400">
                <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:auto pt-3" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar