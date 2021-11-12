import "../styles/index.css";
import { NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import Menu from "../components/Menu";

const DataCollectorPage: NextPage<AppProps> = ({ Component, pageProps }) => {
  pageProps.className = "flex-grow pb-10 bg-green-50";
  return (
    <>
      <Head>
        <title>
          Data Collector - raising awarenes around the digital climate footprint
        </title>
        <meta
          property="og:title"
          content=" Data Collector - raising awarenes around the digital climate footprint"
          key="title"
        />
      </Head>
      <div className="h-screen flex flex-col">
        <Menu />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default DataCollectorPage;
