import Image from "next/image";
import React from "react";
const hero = () => {
  return (
    <div className="bg-blue-dark relative  overflow-hidden w-full  ">
      <Image
        className="absolute invert opacity-5 bg-auto  z-0 inset-0"
        fill
        priority
        objectFit="cover"
        alt="bg-red"
        src={"/grid-bg.png"}
      />
      <div className="max-w-[1100px] flex flex-col md:flex-row  relative z-10 p-4 pb-0 mx-auto md:pt-16 md:p-0">
        <div className="w-full pt-28 md:pt-20">
          <h1 className=" text-center md:text-left text-[35px] md:text-[45px] text-yellow tracking-tighter leading-12  md:leading-16">
            Find parking. <br /> Save time. <br /> Drive stress-free.
          </h1>
          <p className=" w-[90%] md:w-[80%] mt-4 text-center md:text-left text-white/60">
            No more guessing where to park — Eassy Parking helps you find
            available spots instantly and get there without the hassle.
          </p>
          <div className="w-full pb-10 flex md:justify-start justify-center">
            <button className="bg-yellow px-4  text-black py-2 mt-6 md:mt-10 rounded-md border border-white/20 shadow cursor-pointer hover:bg-blue-light duration-200 transition-all hover:text-white ">
              Find a Spot Near Me
            </button>
          </div>
        </div>
        <div className="w-full ">
          <Image
            alt="phone"
            objectFit="contain"
            className="mx-auto object-contain md:translate-y-22"
            width={240}
            height={240}
            src={"/hero-image2.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
