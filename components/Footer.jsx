import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-[#324d67] text-center px-4 pb-2 sm:px-6 sm:pb-3 font-bold flex flex-col items-center justify-center">
      <p className="text-sm lg:text-lg ">
        © 2023 Shop Ease. All Rights Reserved.
      </p>
      <p className="flex">
        <Link href="#" className="p-1">
          <AiFillInstagram className="text-3xl lg:text-4xl lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 " />
        </Link>
        <Link href="#" className="p-1">
          <AiOutlineTwitter className="text-3xl lg:text-4xl lg:transition-transform lg:hover:scale-110 lg:ease-in-out lg:duration-300 " />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
