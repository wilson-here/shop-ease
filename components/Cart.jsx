import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    }); // fetch response from stripe from nextjs backend
    if (response.statusCode === 500) return;
    const data = await response.json();
    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div
      className={`fixed right-0 top-0 ${
        showCart ? "w-full  h-full" : "w-0 h-0"
      } `}
      ref={cartRef}
    >
      <div
        onClick={() => setShowCart(false)}
        className={`absolute bg-[#00000080] h-full w-full grow ${
          showCart ? "left-0" : "-left-full"
        } `}
      ></div>
      <div
        className={`absolute h-full bg-white p-4 max-w-[300px] w-4/5 transition-[right] duration-3000 ease-in-out 2xl:max-w-[400px]  ${
          showCart ? "right-0" : "-right-full"
        } ml-auto relative z-50`}
      >
        <button
          type="button"
          className="cart-heading py-2 text-lg"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={100} className="m-auto text-gray-400" />
            <h3 className="text-gray-400 text-lg mt-4">
              Your shopping bag is empty
            </h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className={`p-2 rounded-2xl border-none text-lg uppercase bg-[#f02d34] text-white cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 ${
                showCart ? "absolute bottom-4 inset-x-0 m-auto w-[80%] " : ""
              }`}
            >
              Continue shopping
            </button>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item?._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item?.name}</h5>
                    <h4>${item?.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item._id)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
