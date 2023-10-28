import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 cursor-pointer">
          <img
            src={urlFor(image && image[0])}
            className="bg-[#ebebeb] shadow-xl  rounded-2xl"
          />
          <p className="mt-2 font-medium lg:text-lg">{name}</p>
          <p className="product-price font-extrabold text-black lg:text-lg">
            ${price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
