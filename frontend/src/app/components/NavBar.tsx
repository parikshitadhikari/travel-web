"use client";
import Link from "next/link";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/hi"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={"/images/favicon.png"}
            alt="logo here"
            className="w-16 h-16"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TravelWeb
          </span>
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
          </div>
          {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500">
            <li>
              <Link
                href={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                Contact
              </Link>
            </li>
          </ul> */}
        </div>
        <div className="md:order-2">
          <Link href="/auth">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button className="w-40 h-10 rounded-xl bg-blue-500 border dark:border-white border-transparent text-white text-sm">
                Login
              </button>
              {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                Signup
              </button> */}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;




function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <a href="#"></a>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          <a href="#"></a>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Testimonials">
          <a href="#"></a>
        </MenuItem>
      </Menu>
    </div>
  );
}

