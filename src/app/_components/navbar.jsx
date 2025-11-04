"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Wrapper */}
      <div className="flex max-w-[1100px] mx-auto justify-between items-center px-4 md:px-0 py-5">
        {/* Left side - logo with solid background */}
        <div className="">
          <Image
            alt="eassy-parking-logo"
            width={130}
            height={130}
            src={"/easy-parking-logo-white.svg"}
          />
        </div>

        {/* Right side - transparent area */}
        {/* <div className="bg-blue-light cursor-pointer border flex items-center justify-center border-white/20 rounded-full h-10 w-10">
          <Menu size={18} color="white" />
        </div> */}
      </div>
    </nav>
  );
}
