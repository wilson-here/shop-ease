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
      <header id="header" className="fixed top-0 z-10 w-full bg-white">
        <Navbar />
      </header>
      <main
        id="main"
        className="main-container mx-auto p-6 w-full mt-16 md:p-10"
      >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
