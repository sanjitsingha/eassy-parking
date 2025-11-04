import React from "react";
import Image from "next/image";
const ThreeSteps = () => {
  return (
    <div className="w-full bg-blue-dark md:py-20 p-4 py-10 text-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-col-1  md:grid-cols-4">
          <div className="md:h-full md:flex items-center justify-center">
            <h3 className="md:text-[45px] text-[35px] tracking-tight text-center md:text-left text-yellow">
              Three Steps. Zero Stress
            </h3>
          </div>
          <div className="w-full col-span-3 md:justify-items-end justify-items-center gap-6 md:gap-0 grid pt-10 grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3">
            <div className="w-[230px] border border-yellow group flex flex-col rounded-md h-[300px] overflow-hidden bg-blue-light">
              <div className="flex-1 overflow-hidden pt-6 pl-4 pr-4 relative">
                <Image
                  fill
                  alt="phone"
                  objectFit="contain"
                  className="mx-auto group-hover:scale-110 transition-all duration-200"
                  src={"/Search.png"}
                />
              </div>
              <div className="bg-yellow px-4 w-full py-3">
                <p className="text-black text-center font-semibold">Search</p>
              </div>
            </div>
            <div className="w-[230px] border border-yellow group flex flex-col rounded-md h-[300px] overflow-hidden bg-blue-light">
              <div className="flex-1 overflow-hidden pt-6 pl-4 pr-4 relative">
                <Image
                  fill
                  alt="phone"
                  objectFit="contain"
                  className="mx-auto group-hover:scale-110 transition-all duration-200"
                  src={"/See.png"}
                />
              </div>
              <div className="bg-yellow px-4 w-full py-3">
                <p className="text-black text-center font-semibold">See</p>
              </div>
            </div>
            <div className="w-[230px] border border-yellow group flex flex-col rounded-md h-[300px] overflow-hidden bg-blue-light">
              <div className="flex-1 overflow-hidden pt-6 pl-4 pr-4 relative">
                <Image
                  fill
                  alt="phone"
                  objectFit="contain"
                  className="mx-auto group-hover:scale-110 transition-all duration-200"
                  src={"/Park.png"}
                />
              </div>
              <div className="bg-yellow px-4 w-full py-3">
                <p className="text-black text-center font-semibold">Park</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
