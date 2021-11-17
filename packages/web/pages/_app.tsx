import "../styles/index.css";
import { NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import Menu from "../components/Menu";

const DataCollectorPage: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>
          Data Collector - raising awarenes around the internet's climate
          footprint
        </title>
        <meta
          property="og:title"
          content=" Data Collector - raising awarenes around the internet's climate footprint"
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
