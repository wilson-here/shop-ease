import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div
      className=" bg-[#dcdcdc] rounded-2xl p-4 flex flex-col flex-col-reverse sm:p-6 md:min-h-[350px] md:flex-row md:items-center md:justify-between md:p-10 md:relative md:bg-transparent md:min-h-[450px] md:before:content-[''] md:before:inset-0 md:before:w-full md:before:h-full md:before:bg-[#ebebeb] md:before:absolute md:before:-z-20 md:before:rounded-2xl lg:min-h-[450px] xl:min-h-[550px]"
      style={{ color: "#324d67" }}
    >
      {/* desc */}
      <div className="mt-8">
        <p className="text-sm md:text-base lg:text-lg xl:text-2xl">
          {heroBanner.smallText}
        </p>
        <h3 className="font-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {heroBanner.midText}
        </h3>
        <h3 className="font-black text-3xl text-white drop-shadow-xl md:text-6xl lg:text-8xl xl:text-9xl">
          {heroBanner.largeText1}
        </h3>
        <Link href={`/product/${heroBanner.slug.current}`}>
          <button
            type="button"
            className=" bg-[#f02d34] mt-4 py-2 px-4 rounded-2xl font-medium border-none cursor-pointer text-white uppercase text-sm md:mt-10 lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 md:text-base lg:text-lg"
          >
            {heroBanner.buttonText}
          </button>
        </Link>
      </div>
      {/* image */}
      <div className="md:self-end">
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="object-contain m-auto w-full -top-14 max-w-[300px] md:m-[unset] md:absolute md:-z-10 md:left-[unset] md:right-32 md:-top-2 md:max-w-[400px] lg:-top-2 lg:max-w-[500px] lg:right-32 xl:max-w-[700px] xl:right-32 xl:-top-16"
        />
        <div className="flex flex-col text-end font-thin">
          <h5 className="text-sm text-[#324d67] self-end font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] md:text-base lg:text-lg xl:text-2xl ">
            Description
          </h5>
          <p className="text-sm text-[#5f5f5f]  md:text-base lg:text-lg xl:text-xl">
            {heroBanner.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
