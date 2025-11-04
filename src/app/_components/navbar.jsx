"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-light/30 border-b border-white/10 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Wrapper */}
      <div className="flex max-w-[1100px] mx-auto justify-between items-center px-4 md:px-0 py-4">
        {/* Logo */}
        <div>
          <Image
            alt="eassy-parking-logo"
            width={130}
            height={130}
            src={"/easy-parking-logo-white.svg"}
          />
        </div>

        {/* Button */}
        <div className="bg-yellow cursor-pointer rounded-lg px-4 py-[6px]">
          <Link className="text-black text-sm" href={"/"}>
            Open the App
          </Link>
        </div>
      </div>
    </nav>
  );
}
