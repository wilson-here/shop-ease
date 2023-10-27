import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        {" "}
        <title>SHOP EASE | shopping made easy!</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="fixed top-0 z-10 w-full bg-white">
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
