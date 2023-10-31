import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const { slug } = router.query;
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
        className={`main-container mx-auto p-4 w-full mt-16 sm:p-6 ${
          router.pathname === "/success"
            ? "min-h-[calc(100vh-66px-66px)] lg:min-h-[calc(100vh-66px-84px)] flex justify-center items-center"
            : ""
        }`}
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
