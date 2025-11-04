import { Clock2, Navigation2Icon, TimerIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
const AppPreview = () => {
  return (
    <div className="w-full bg-gray-100 md:pt-10 p-4 pb-0 ">
      <div className="max-w-[1100px] grid [direction:rtl] grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 mx-auto">
        <div className="md:py-30 py-20">
          <h1 className="text-[45px] text-center md:text-right text-black">
            Parking that feels <br />
            <span className="text-yellow font-bold">effortless</span>
          </h1>
          <p className="text-sm w-full text-center md:text-right md:w-[60%] mt-6 text-black/40">
            Eassy Parking shows nearby available spots in real-time — so you can
            plan before you even start your car
          </p>
          <div className="flex  mt-8">
            <div className="border-l-2 border-yellow pl-4 ">
              <p className="text-lg text-center text-black">
                Realtime Availablity
              </p>
            </div>
            <div className="px-4    border-l-2 border-yellow">
              <p className="text-lg text-center text-black">Time Saving</p>
            </div>
            <div className="px-4 ">
              <p className="text-lg text-center text-black">Smart Direction</p>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden group w-full relative h-full">
          <Image
            className="inset-0 translate-y-20 group-hover:translate-y-0 transition-all duration-500"
            alt="preview"
            fill
            objectFit="contain"
            src={"/AppPreview2.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default AppPreview;
