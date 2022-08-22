import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";

import Layout from "../components/layouts/Layout";
// import NProgress from "nprogress";

import "../styles/globals.css";
////////////////////////////////////////////////////////////////////////////////
// import theme from "../styles/theme";
// import "../styles/globals.css";
// import "../styles/nprogress.css";
// import Colors from "../utils/Colors";
/// //////////////////////////////////////////////////////////////////////////////

//--------------NProgress-----------
// NProgress.configure({
//   minimum: 0.3,
//   easing: "ease",
//   speed: 500,
//   showSpinner: false,
// });

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <title>Preye Nabena</title>

        <meta name="description" content="Preye Nabena's Portfolio" />
        <meta name="theme-color" content={primaryColor} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Preye Nabena" />
        <meta property="og:description" content="Preye Nabena's Portfolio" />
        <meta property="og:site_name" content="Preye Nabena" />
        <link rel="icon" href="/favlogo.ico" />
      </Head> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
