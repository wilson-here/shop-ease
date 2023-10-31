import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="flex justify-between relative items-center pr-4 shadow-md">
      <p className="logo">
        <Link href="/" className="">
          <img src="../logo.png" className="w-48 p-4 2xl:w-56" />
        </Link>
      </p>
      <button
        type="button"
        className="relative text-4xl text-[#808080] cursor-pointer border-0 bg-transparent md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-110"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="absolute -right-1 -top-1 flex items-center justify-center text-sm text-[#eee] bg-[#f02d34] w-6 h-6 rounded-full text-center font-semibold ">
          <span className="inline-block">{totalQuantities}</span>
        </span>
      </button>

      <Cart />
    </div>
  );
};

export default Navbar;
