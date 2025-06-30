"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur border-b border-gray-100/50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-sm" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 transition-all duration-300">
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={isScrolled ? 36 : 44}
            height={isScrolled ? 36 : 44}
            className="rounded-full transition-all duration-300"
          />
          <span
            className={`font-semibold whitespace-nowrap text-gray-900 transition-all duration-300 ${
              isScrolled ? "text-base" : "text-lg"
            }`}
          >
            Dr. Serena Blake
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-black">
            Services
          </a>
          <a href="#faq" className="text-gray-700 hover:text-black">
            FAQ
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black">
            Contact
          </a>
          <Link href="/submissions" className="text-gray-700 hover:text-black">
            Submissions
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white bg-opacity-95 px-6 pb-4 shadow">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#faq" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <Link
              href="/submissions"
              className="text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Submissions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
