"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../public/svg/logo.svg"; // ייבוא ה-SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* כפתור ההמבורגר */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#6B8E23] focus:outline-none"
            >
              <svg
                className="h-10 w-10"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* לוגו */}
          <div className="flex items-center">
            <Link href="#home" className="mr-6 md:mr-1">
              {/* הצגת לוגו ה-SVG */}
              <img
                src={Logo.src} // שימוש ב-SVG
                alt="Tali Hadad Logo"
                className="h-10 w-auto" // התאמה לגובה ורוחב
              />
            </Link>
          </div>

          {/* קישורים */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#portfolio"
              className="text-gray-800 hover:text-[#6B8E23] px-3 py-2 rounded-md text-sm font-medium"
            >
              פרויקטים
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-[#6B8E23] px-3 py-2 rounded-md text-sm font-medium"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#portfolio"
              className="block text-gray-800 hover:text-[#6B8E23] px-3 py-2 rounded-md text-base font-medium"
            >
              פרויקטים
            </Link>
            <Link
              href="#contact"
              className="block text-gray-800 hover:text-[#6B8E23] px-3 py-2 rounded-md text-base font-medium"
            >
              צור קשר
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
