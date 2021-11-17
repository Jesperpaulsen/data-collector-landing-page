import { GetStaticProps, NextPage } from "next";
import { BodyBlock } from "../types/BodyBlock";
import SanityPageService from "../services/SanityPageService";
import { SanityDocument } from "@sanity/types";
import { BodyRenderer } from "../components/BodyRenderer";
import Button from "../components/button/Button";

const query = `*[_id == "homePage"][0]{

}`;

interface HomePage extends SanityDocument {
  preview: boolean;
  body: BodyBlock;
}

const pageService = new SanityPageService<HomePage>(query);

const Index: NextPage<HomePage> = (initialData) => {
  const { data } = pageService.getPreviewHook(initialData)();

  return (
    <div className="flex flex-col justify-center h-full p-4 items-center text-center">
      <BodyRenderer bodyParts={data.body.bodyParts} />
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = (context) => {
  return pageService.fetchQuery(context);
};
