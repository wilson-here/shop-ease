import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container items-center pr-4 shadow-md">
      <p className="logo">
        <Link href="/" fontSize={0}>
          <img src="../logo.png" className="w-60 p-4 rounded-lg" />
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

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
