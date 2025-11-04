import React from "react";

const Quote = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1100px] group overflow-hidden mx-auto md:py-50 p-4 py-40  ">
        <h2 className="text-black leading-14 tracking-tight text-center md:text-left text-[35px] md:text-[45px]">
          <span className="font-bold  text-yellow">Imagine a city</span> where
          you never have to circle the block for parking again.
        </h2>
        <p className="text-black text-center md:text-left mt-6 md:mt-12 py-3 ">
          Eassy Parking isn’t just an app — it’s a move towards calmer, cleaner,
          and more efficient cities.
        </p>
        <div className="w-full hidden md:block group-hover:translate-x-0 transition-all duration-[5s] ease-in-out h-1 mt-2 -translate-x-full  bg-yellow"></div>
      </div>
    </div>
  );
};

export default Quote;
