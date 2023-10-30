import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price }, className }) => {
  return (
    <div className={`${className}`}>
      <Link href={`/product/${slug.current}`} className="h-full block">
        <div className="text-[#324d67]  cursor-pointer flex flex-col h-full md:transition-transform md:hover:scale-110 md:ease-in-out md:duration-300 ">
          <img
            src={urlFor(image && image[0])}
            className="bg-[#ebebeb] shadow-xl  rounded-2xl"
          />
          <div className="flex flex-col justify-between grow">
            <p className="text-base mt-2 font-medium lg:text-lg 2xl:text-2xl">
              {name}
            </p>
            <p className="text-base product-price font-extrabold text-black lg:text-lg 2xl:text-2xl ">
              ${price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
