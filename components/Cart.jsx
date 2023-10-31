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
        className={`absolute h-full bg-white p-4 max-w-[300px] w-4/5 transition-[right] duration-3000 ease-in-out lg:p-6 lg:max-w-[350px] 2xl:max-w-[400px] ${
          showCart ? "right-0" : "-right-full"
        } ml-auto relative z-50`}
      >
        <button
          type="button"
          className="flex items-center font-medium cursor-pointer gap-1 border-0 bg-transparent py-2 text-lg 2xl:gap-2"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="">Your Cart</span>
          <span className="text-[#f02d34]">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart m-10 text-center">
            <AiOutlineShopping size={100} className="m-auto text-gray-400" />
            <h3 className="text-gray-400 text-lg mt-4 font-medium">
              Your shopping bag is empty
            </h3>
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className={`p-2 rounded-2xl border-none text-lg uppercase bg-[#f02d34] text-white cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 ${
                showCart
                  ? "absolute bottom-4 lg:bottom-6 inset-x-0 m-auto w-[80%] "
                  : ""
              }`}
            >
              Continue shopping
            </button>
          </div>
        )}

        <div className=" overflow-auto max-h-[60vh] ">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div
                className="product flex py-2 justify-start gap-2 2xl:gap-4 2xl:py-4"
                key={item?._id}
              >
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image rounded-md w-16 h-16 bg-[#ebebeb] lg:w-24 lg:h-24 2xl:w-28 2xl:h-28"
                />
                <div className="flex flex-col justify-between grow">
                  <div className="flex justify-between items-start text-[#324d67] gap-2">
                    <h5
                      className="text-xs font-medium line-clamp-2 lg:text-lg 2xl:text-xl"
                      style={{ lineHeight: "1.1" }}
                    >
                      {item?.name}
                    </h5>
                    <h4 className="text-[#f02d34] font-medium text-xs lg:text-lg 2xl:text-xl">
                      ${item?.price}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="border-solid border-[#808080] border flex  divide-x divide-[#808080] items-stretch">
                        <span
                          className="w-6 h-6 lg:w-8 lg:h-8  2xl:w-10 2xl:h-10 justify-center text-sm flex items-center cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus
                            className="lg:text-lg 2xl:text-2xl"
                            color="#f02d34"
                          />
                        </span>
                        <span className="w-6 h-6 lg:w-8 lg:h-8  2xl:w-10 2xl:h-10 lg:text-lg justify-center text-sm flex items-center select-none 2xl:text-xl">
                          {item.quantity}
                        </span>
                        <span
                          className="w-6 h-6 lg:w-8 lg:h-8  2xl:w-10 2xl:h-10 justify-center text-sm flex items-center cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus
                            className="lg:text-lg 2xl:text-2xl"
                            color="#31a831"
                          />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-2xl lg:text-4xl text-[#f02d34] cursor-pointer bg-transparent border-0 2xl:text-5xl"
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
          <div className="absolute bottom-4 inset-x-0 mx-auto w-full px-4 lg:px-6 lg:bottom-6">
            <div className="flex justify-between text-lg font-medium text-black lg:text-2xl 2xl:text-3xl">
              <h3>Subtotal: </h3>
              <h3 className="text-[#f02d34] font-bold">
                ${parseFloat(totalPrice.toFixed(2))}
              </h3>
            </div>
            <div className="">
              <button
                type="button"
                className="font-medium rounded-2xl text-lg bg-[#f02d34] border-0 text-white w-full mt-4 p-2 select-none cursor-pointer lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 lg:text-2xl lg:p-3 2xl:text-3xl 2xl:p-4 2xl:mt-6"
                onClick={handleCheckout}
              >
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
