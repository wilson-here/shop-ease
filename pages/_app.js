import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "/styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster
          toastOptions={{
            duration: 1000,
            className: "custom-toast",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
