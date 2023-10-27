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
  },
}) => {
  return (
    <div className="footer-banner-container flex items-center ">
      <div className="banner-desc items-center w-full">
        <div className="left">
          <p className="font-bold text-3xl">{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p className="mt-10">{saleTime}</p>
        </div>
        <div className="right w-1/4">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              type="button"
              className="uppercase transition-transform hover:scale-110 ease-in-out duration-300"
            >
              {buttonText}
            </button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
