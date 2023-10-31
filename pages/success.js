import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);
  return (
    <div className="bg-white flex items-center justify-center">
      <div className=" bg-[#dcdcdc] flex flex-col items-stretch p-8 rounded-2xl text-sm w-100% max-w-[370px]  lg:w-[1000px] lg:mx-auto ">
        <p className="text-[#008000] mx-auto">
          <BsBagCheckFill className="text-4xl" />
        </p>
        <h2 className="text-lg text-center mt-2 capitalize font-bold text-[#324d67]">
          Thank you for your order!
        </h2>
        <p className="mt-4 font-semibold text-center">
          Check your email inbox for the receipt. If you have any questions,
          please email{" "}
          <a href="mailto:quanganhha99@gmail.com" className="text-[#f02d34]">
            quanganhha99@gmail.com
          </a>
        </p>
        <Link href="/" className="mt-4  text-center">
          <button
            type="button"
            className="max-w-[250px] w-full p-2 rounded-2xl border-none text-lg uppercase bg-[#f02d34] text-white cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 "
          >
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
