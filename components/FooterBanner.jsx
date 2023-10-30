import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
    slug,
  },
}) => {
  return (
    <div
      className="banner-desc bg-[#f02d34] p-4 rounded-2xl relative text-white mt-4 flex flex-col gap-2 w-full min-[480px]:mt-6 min-[480px]:p-6 md:min-h-[250px]  md:flex-row md:justify-between md:items-center
    md:bg-transparent lg:min-h-[350px] xl:mt-20 before:content-[''] before:inset-0 before:w-full before:h-full before:bg-[#f02d34] before:absolute before:-z-20 before:rounded-2xl "
    >
      <div className="self-start md:self-center">
        <p className="font-bold text-sm md:text-base lg:text-lg">{discount}</p>
        <h3 className="font-extrabold text-3xl lg:text-5xl">{largeText1}</h3>
        <h3 className="font-extrabold text-3xl lg:text-5xl">{largeText2}</h3>
        <p className="text-sm md:text-base lg:text-lg">{saleTime}</p>
      </div>
      <img
        src={urlFor(image)}
        className="-top-25 left-22 object-contain
          m-auto w-full max-w-[300px] md:max-w-[400px] md:absolute md:m-auto md:inset-0 md:-z-10 lg:max-w-[550px] xl:-top-10 xl:max-w-[500px]"
      />
      <div className="right self-start md:self-center md:text-end">
        <p className="text-sm lg:text-lg">{smallText}</p>
        <h3 className="font-extrabold text-3xl lg:text-4xl">{midText}</h3>
        <p className="text-sm lg:text-lg">{desc}</p>
        <Link href={`/product/${slug.current}`}>
          <button
            type="button"
            className="text-sm uppercase mt-4 py-2 px-4 rounded-2xl font-medium border-none cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 bg-white border-none lg:text-lg"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
