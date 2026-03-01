"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const pathname = usePathname();
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      {/* Spacer to prevent layout shift when navbar is fixed */}
      <div className="font-zcool h-0" />
      <motion.nav
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="bg-transparent fixed top-0 left-0 right-0 z-10"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex">
              <Link href="/">
                <Image
                  src="/ktr-final.webp"
                  alt="Logo"
                  width={319}
                  height={438}
                  className="h-auto w-[150px] top-[-25px] left-[8px] absolute"
                  priority
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-4 mt-10 ml-auto">
              {/* Work Button */}
              <div className="px-4">
                <ThemeToggle />
              </div>
              <Link href="/" passHref>
                <button
                  className={`relative z-20 border border-gray-300 dark:border-white/20 rounded-full px-6 py-3 min-w-[7rem] text-center transition-all duration-300 ease-in-out backdrop-blur-md
        ${"/".includes(pathname) ? "bg-hovercolor text-brown dark:text-black" : "text-gray-700 dark:text-black bg-white/10 hover:bg-hovercolor hover:text-black hover:text-xl dark:hover:text-black"}`}
                >
                  Home
                </button>
              </Link>

              {/* Work Button (scrolls to recens on home) */}
              <Link href="/#recens" passHref>
                <button
                  className={`relative z-20 border border-gray-300 dark:border-white/20 rounded-full px-6 py-3 min-w-[7rem] text-center transition-all duration-300 ease-in-out backdrop-blur-md
        ${pathname === "/#recens" ? "bg-hovercolor text-brown dark:text-black" : "text-gray-700 dark:text-white bg-white/10 hover:bg-hovercolor hover:text-black hover:text-xl dark:hover:text-black"}`}
                >
                  Work
                </button>
              </Link>

              {/* About Button */}
              <Link href="/about" passHref>
                <button
                  className={`relative z-20 border border-gray-300 dark:border-white/20 rounded-full px-6 py-3 min-w-[7rem] text-center transition-all duration-300 ease-in-out backdrop-blur-md
        ${pathname === "/about" ? "bg-hovercolor text-brown dark:text-black" : "text-gray-700 dark:text-white hover:bg-hovercolor hover:text-black hover:text-xl bg-white/10 dark:hover:text-black"}`}
                >
                  About
                </button>
              </Link>

              {/* Wrap with anchor tag to allow target="_blank" and rel="noopener noreferrer" */}
                <Link
                href="/tanvi-final-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 bg-white/10 dark:bg-white/10 text-blackish dark:text-white border border-gray-300 dark:border-white/20 rounded-full px-6 py-3 min-w-[7rem] text-center transition-all duration-300 ease-in-out backdrop-blur-md hover:bg-hovercolor dark:hover:bg-white/20 hover:text-black dark:hover:text-white"
                >
                Resume
                  </Link>

              {/* Playground Button */}
              <Link href="/playground" passHref>
                <button
                  className={`border border-gray-300 dark:border-white/20 rounded-full px-6 py-3 min-w-[7rem] text-center transition-all duration-300 ease-in-out backdrop-blur-md
          ${pathname === "/playground" ? "bg-hovercolor text-brown dark:text-black" : "text-gray-700 dark:text-white bg-white/10 hover:bg-hovercolor hover:text-black hover:text-xl dark:hover:text-black"}`}
                >
                  Playground
                </button>
              </Link>
            </div>{" "}
            {/* Mobile Navigation Toggle */}
            <div className="sm:hidden flex items-center mt-12">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md dark:text-pink hover:text-xl hover:border hover:border-pink transition-all duration-400 ease-in-out"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-[30px] w-[30px] transition-all duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-[30px] w-[30px] transition-all duration-300 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isClick && (
          <div
            className="md:hidden backdrop-blur-sm text-blackish dark:text-whitish transition-all duration-300 ease-in-out transform translate-x-0 mt-4"
            style={{ transition: "transform 0.3s ease-out" }}
          >
            <div className="px-2 pt-6 pb-3 space-y-1 sm:px-3 font-semibold text-zcool">
              <button
                className="hover:text-black block hover:bg-hovercolor hover:text-xl rounded-lg p-2 transition-all duration-300 ease-in-out dark:hover:text-black"
                onClick={() => (window.location.href = "/")}
              >
                Home
              </button>
              <button
                className="hover:text-black block hover:bg-hovercolor hover:text-xl rounded-lg p-2 transition-all duration-300 ease-in-out dark:hover:text-black"
                onClick={() => (window.location.href = "/#recens")}
              >
                Work
              </button>
              <button
                className="hover:text-black block hover:bg-hovercolor hover:text-xl rounded-lg p-2 transition-all duration-300 ease-in-out dark:hover:text-black"
                onClick={() => (window.location.href = "/playground")}
              >
                Playground
              </button>
              <button
                className="hover:text-black block hover:bg-hovercolor hover:text-xl rounded-lg p-2 transition-all duration-300 ease-in-out dark:hover:text-black"
                onClick={() => (window.location.href = "/about")}
              >
                About
              </button>
              <button
                className="hover:text-black block hover:bg-hovercolor hover:text-xl rounded-lg p-2 transition-all duration-300 ease-in-out dark:hover:text-black"
                onClick={() => {
                  window.open("/tanvi-final-resume.pdf", "_blank", "noopener,noreferrer")
                }}
              >
                Resume
              </button>
              <ThemeToggle />
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
}
