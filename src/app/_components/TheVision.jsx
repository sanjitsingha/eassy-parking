import React from "react";

const TheVision = () => {
  return (
    <div className="w-full p-4 py-20 md:py-40 bg-blue-light">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-white/40 hover:text-white/90 transition-all duration-300 ease-in-out text-[35px] md:text-[45px] tracking-tight text-center">
          Our goal is to make parking predictable, accessible, and sustainable —
          starting right here in Siliguri, and{" "}
          <span className="border-b-4 border-yellow">
            growing city by city.
          </span>
        </p>
      </div>
    </div>
  );
};

export default TheVision;
