import { GetStaticProps, NextPage } from "next";
import { BodyBlock } from "../types/BodyBlock";
import SanityPageService from "../services/SanityPageService";
import { SanityDocument } from "@sanity/types";
import { BodyRenderer } from "../components/BodyRenderer";

const query = `*[_id == "aboutPage"][0]{

}`;

interface AboutPage extends SanityDocument {
  preview: boolean;
  body: BodyBlock;
}

const pageService = new SanityPageService<AboutPage>(query);

const About: NextPage<AboutPage> = (initialData) => {
  const { data } = pageService.getPreviewHook(initialData)();

  return (
    <div className="flex flex-col items-center h-full px-4 text-black">
      <BodyRenderer bodyParts={data.body.bodyParts} />
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = (context) => {
  return pageService.fetchQuery(context);
};
