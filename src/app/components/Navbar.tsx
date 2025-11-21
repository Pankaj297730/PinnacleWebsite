"use client";

import { useState } from "react";
import Link from "next/link";

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 py-6">

        {/* Logo */}
   {/* Logo */}
<div className="flex items-center gap-2">


<img src="https://res.cloudinary.com/dbv77rbsv/image/upload/v1763661085/logo-dark_lheoda.png" alt=""  width={140}
    height={40}    className="object-contain" />

</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-base font-semibold">
             <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="contact" className="hover:text-blue-600 transition">
            Contact Us
          </Link>
          <Link href="aboutus" className="hover:text-blue-600 transition">
            About Us
          </Link>
         
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4 items-center">
        
          <Link
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
          Explore Properties
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          <Link href="#" className="block hover:text-blue-600">
            Buy Plots
          </Link>
          <Link href="#" className="block hover:text-blue-600">
            Pre-Launch
          </Link>
          <Link href="#" className="block hover:text-blue-600">
            Brokers
          </Link>

          <div className="border-t pt-4">
            <Link
              href="#"
              className="w-full block text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
