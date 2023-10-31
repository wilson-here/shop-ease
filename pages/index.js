import React from "react";

import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading my-10 text-center md:my-16 ">
        <h2 className="text-2xl lg:text-4xl font-extrabold uppercase ">
          New Arrivals
        </h2>
        <p className="text-sm font-extralight lg:text-lg lg:mt-2">
          Tech Gadgets Collection
        </p>
      </div>
      <div className="flex flex-wrap gap-y-4 min-[480px]:-mx-2 min-[480px]:gap-y-2 sm:-mx-3 sm:gap-y-3 md:-mx-4 md:gap-y-4">
        {products
          ?.filter((product, i) => i <= 7)
          .map((product) => (
            <Product
              key={product._id}
              product={product}
              className="w-full min-[480px]:px-2 min-[480px]:w-1/2 sm:px-3 sm:w-1/3 md:px-4 md:w-1/4 "
            />
          ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};

export default Home;
