import { Link } from "react-router-dom";
import Button from "../Button";
import React from "react";

/**
 * Footer component representing the bottom navigation section of the page.
 * It includes a logo, product name, navigation links, and a login button.
 *
 * @returns {JSX.Element} The Footer component.
 */
const Footer = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and product name */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* Logo image */}
          {/* <img src={} alt="" className="w-16 h-16" /> */}
          {/* Product name */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GrowMore
          </span>
        </Link>

        {/* Login button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/login">
            <Button className="w-40 bg-green-600 text-white hover:bg-green-700 rounded-lg text-lg px-2 py-2 text-center">
              Login
            </Button>
          </Link>
        </div>

        {/* Navigation links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          {/* Navigation links list */}
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500">
            {/* Home link */}
            <li>
              <Link
                to={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                Home
              </Link>
            </li>
            {/* About link */}
            <li>
              <Link
                to={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                About
              </Link>
            </li>
            {/* Services link */}
            <li>
              <Link
                to={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                Services
              </Link>
            </li>
            {/* Contact link */}
            <li>
              <Link
                to={"#"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Footer component as the default export
export default Footer;
