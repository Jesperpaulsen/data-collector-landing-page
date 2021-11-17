import { GetStaticProps, NextPage } from "next";
import { BodyBlock } from "../types/BodyBlock";
import SanityPageService from "../services/SanityPageService";
import { SanityDocument } from "@sanity/types";
import { BodyRenderer } from "../components/BodyRenderer";

const query = `*[_id == "faqPage"][0]{

}`;

interface FAQPage extends SanityDocument {
  preview: boolean;
  body: BodyBlock;
}

const pageService = new SanityPageService<FAQPage>(query);

const FAQ: NextPage<FAQPage> = (initialData) => {
  const { data } = pageService.getPreviewHook(initialData)();

  return (
    <div className="flex flex-col items-center h-full text-center px-4">
      <BodyRenderer bodyParts={data.body.bodyParts} white />
    </div>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps = (context) => {
  return pageService.fetchQuery(context);
};
