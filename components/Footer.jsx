import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2023 Shop Ease. All Rights Reserved.</p>
      <p className="icons">
        <Link href="#">
          <AiFillInstagram className="transition-transform hover:scale-110 ease-in-out duration-300" />
        </Link>
        <Link href="#">
          <AiOutlineTwitter className="transition-transform hover:scale-110 ease-in-out duration-300" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
