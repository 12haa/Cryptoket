"use client";
import React from "react";

const Banner = ({ parentStyles, bannerText, childStyles }) => {
  return (
    <div
      className={`relative w-full  flex items-center -z-10 overflow-hidden nft-gradient ${parentStyles}   `}
    >
      <p
        className={`font-bold text-5xl font-poppins leading-17  ${childStyles} `}
      >
        {bannerText}
      </p>
      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg  -top-1 -left-[40px]" />
      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg  lg:top-[130px] -top-[-124px] -left-[-200px] lg:-left-[-500px]" />
      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg  sm:hidden lg:top-[60px] md:-top-[-124px] -left-[-200px] lg:-left-[-990px]" />
      
    </div>
  );
};

export default Banner;
