import React, { useEffect, useState, useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";

import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import Slider from "react-slick";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, _id } = product;
  const [index, setIndex] = useState(0); // track image đang được hover lên
  const { decQty, incQty, qty, setQty, onAdd, setShowCart, cartItems } =
    useStateContext();

  console.log("cartItems", cartItems);
  console.log("product", product);
  var settingsSm = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    infinite: false,
    arrows: false,
  };

  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,

          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  // reset qty and image index
  useEffect(() => {
    setQty(1);
    setIndex(0);
  }, [_id]);

  const handleBuyNow = () => {
    setShowCart(true);
    if (!cartItems.find((item) => item._id === product._id))
      onAdd(product, qty);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row lg:gap-8">
        <div className="sm:w-1/3">
          <div className="image-container">
            {image[index] && (
              <img
                src={urlFor(image[index])}
                className="object-cover bg-[#ebebeb] rounded-lg cursor-pointer transition-all duration-300 ease-in-out w-full aspect-square"
              />
            )}
          </div>
          <Slider
            className="slider-small -mx-1 mt-2 lg:mt-4 lg:-mx-2"
            {...settingsSm}
          >
            {image?.map((item, i) => (
              <div className="outline-none">
                <img
                  key={i}
                  src={urlFor(item)}
                  onMouseEnter={() => {
                    setIndex(i);
                  }}
                  className={`small-image aspect-square rounded-md bg-[#ebebeb] cursor-pointer ${
                    i === index // nếu image của hình trong vòng loop = index của image đang được hover -> active image đó
                      ? "bg-[#f02d34]"
                      : ""
                  }
                  `}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="sm:w-2/3 sm:flex sm:flex-col ">
          <h1
            className="font-bold text-xl text-[#324d67] lg:text-3xl 2xl:text-4xl"
            style={{ lineHeight: "1.5" }}
          >
            {name}
          </h1>
          <div className="text-[#f02d34] flex items-center mt-2 lg:text-xl lg:mt-4 xl:text-3xl">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="ml-1 text-black font-medium">(20)</p>
          </div>
          <h4
            className="text-base text-black font-medium mt-8 lg:text-xl lg:mt-12 2xl:text-2xl"
            style={{ lineHeight: "1.5" }}
          >
            Details:{" "}
          </h4>
          <p
            className="text-base font-normal text-black lg:text-xl 2xl:text-2xl"
            style={{ lineHeight: "1.5" }}
          >
            {details}
          </p>
          <p
            className="price font-bold text-2xl text-[#f02d34] mt-8 lg:text-4xl lg:mt-12 2xl:text-5xl"
            style={{ lineHeight: "1.5" }}
          >
            ${price}
          </p>
          <div className="sm:flex sm:flex-col sm:grow sm:justify-end">
            <div className="flex gap-2 items-center mt-2 sm:mt-4 lg:gap-4">
              <h3 className="font-medium lg:text-xl 2xl:text-2xl">Quantity:</h3>
              <div className="border-solid border-[#808080] border flex  divide-x divide-[#808080] items-stretch">
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 justify-center text-base flex items-center cursor-pointer"
                  onClick={decQty}
                >
                  <AiOutlineMinus
                    className="lg:text-xl 2xl:text-2xl"
                    color="#f02d34"
                  />
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 justify-center text-base flex items-center select-none lg:text-xl 2xl:text-2xl">
                  {qty}
                </div>
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 justify-center text-base flex items-center cursor-pointer plus"
                  onClick={incQty}
                >
                  <AiOutlinePlus
                    className="lg:text-xl 2xl:text-2xl"
                    color="#31a831"
                  />
                </div>
              </div>
            </div>
            <div className="buttons flex gap-4 mt-8 lg:gap-8 lg:mt-12 ">
              <button
                type="button"
                className="rounded-2xl font-medium text-lg bg-white text-[#f02d34] border border-solid border-[#f02d34] w-1/2 p-2 select-none cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 lg:text-2xl lg:p-3 2xl:text-3xl 2xl:p-4"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="rounded-2xl font-medium text-lg bg-[#f02d34] border-0 text-white w-1/2 p-2 select-none cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 lg:text-2xl lg:p-3 2xl:text-3xl 2xl:p-4"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#324d67]">
        <h2 className="text-center text-xl my-10 uppercase font-semibold  lg:text-3xl 2xl:text-4xl">
          You may also like
        </h2>
        <Slider
          className="slider-recommend -mx-2 my-10 items-center md:gap-2"
          {...settings}
        >
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

// getStatidPaths tell browsers to render [slug].js to render page product detail before data is loaded from getStaticProps below
export const getStaticPaths = async () => {
  const query = `*[_type == 'product'] {
        slug {
            current
        }
    }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

// next js auto detect the slug we're on a specific product page and return the slug param below to pass in the getStaticsProps function
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product" && slug.current !='${slug}']`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
