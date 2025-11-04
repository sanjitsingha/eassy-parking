import React from "react";
import Image from "next/image";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1100px] mx-auto p-4 py-20 md:py-20">
        <div className="w-full flex justify-between items-center">
          <Image
            alt="logo"
            width={130}
            height={130}
            src={"/easy-parking-logo-dark.svg"}
          />
          <button className="bg-yellow md:block hidden px-4 text-black py-2 mt-10 rounded-md border border-white/20  cursor-pointer hover:bg-blue-light duration-200 transition-all hover:text-white ">
            Find a Spot Near Me
          </button>
        </div>
        <p className="text-sm mt-4 text-black/60 w-full md:w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tempore
          doloremque accusantium consequatur praesentium enim, ratione aliquam
          deserunt iure, harum molestiae ipsam placeat odio debitis consectetur,
          ut nobis modi officiis quae architecto. Nesciunt, impedit hic enim ut
          quis officia odio aspernatur? Voluptates deleniti quod eum.
        </p>
        <div className="w-full mt-6">
          <button className="bg-blue-light cursor-pointer border border-blue-dark flex items-center px-4 gap-3 py-1 rounded-full">
            <InstagramIcon size={16} />
            <p className="text-sm">Instagram</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
