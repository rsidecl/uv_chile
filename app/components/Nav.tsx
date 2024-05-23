"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg p-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link href="/" legacyBehavior>
              <a className="flex-shrink-0">
                <Image src="/uvLogob.png" alt="Logo" width={100} height={32} />
              </a>
            </Link>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/components" legacyBehavior>
                <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-semibold transition duration-300">
                  UV Chile
                </a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-semibold transition duration-300">
                  Clientes
                </a>
              </Link>
              <Link href="/community" legacyBehavior>
                <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-semibold transition duration-300">
                  Contacto
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-md inline-flex items-center justify-center transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/components" legacyBehavior>
                <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 text-center">
                  UV Chile
                </a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 text-center">
                  Clientes
                </a>
              </Link>
              <Link href="/community" legacyBehavior>
                <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 text-center">
                  Contacto
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
