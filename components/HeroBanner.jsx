import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className="font-black">{heroBanner.midText}</h3>
        <h3 className="font-black">{heroBanner.largeText1}</h3>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image object-cover"
        />
        <div>
          <Link href={`/product/${heroBanner.slug.current}`}>
            <button
              type="button"
              className="uppercase transition-transform hover:scale-110 ease-in-out duration-300"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
