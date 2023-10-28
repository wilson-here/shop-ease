import React from "react";

import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading my-6 text-center md:my-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold">
          Best-selling Products
        </h2>
        <p className="font-extralight lg:text-lg lg:mt-2">
          Speakers of many variations
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-6 gap-y-6 min-[480px]:-mx-2 md:gap-y-2">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
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
