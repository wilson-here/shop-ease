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
          <img src="../logo.png" className="w-48 p-4" />
        </Link>
      </p>
      <button
        type="button"
        className="cart-icon relative"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty absolute right-0 -top-1 flex items-center justify-center">
          <span className="inline-block">{totalQuantities}</span>
        </span>
      </button>

      <Cart />
    </div>
  );
};

export default Navbar;
