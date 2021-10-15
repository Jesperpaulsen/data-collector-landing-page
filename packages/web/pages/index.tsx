import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { Body } from "../types/BodyBlock";
import SanityPageService from "../services/SanityPageService";
import { SanityDocument } from "@sanity/types";

const query = `*[_type == "homePage"]`;

interface HomePage extends SanityDocument {
  preview: boolean;
  body: Body;
}

const pageService = new SanityPageService<HomePage>(query);

const Index: NextPage<HomePage> = (initialData) => {
  const { data } = pageService.getPreviewHook(initialData)();

  return (
    <div className="flex flex-col justify-center h-full items-center text-center p-4 text-gray-800">
      <div className="text-4xl md:text-5xl text-black pb-10">
        You just polluted.
      </div>
      <div>
        Every time you enter a website you pollute. Every time you stream a
        video you pollute. You don't know where, and you don't know how much.
      </div>
      <div className="text-black">
        Soon you will be able to sign up to get a better understanding of your
        digital climate footprint.
      </div>
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = (context) => {
  return pageService.fetchQuery(context);
};
