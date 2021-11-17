import { GetStaticProps, NextPage } from "next";
import { BodyBlock } from "../types/BodyBlock";
import SanityPageService from "../services/SanityPageService";
import { SanityDocument } from "@sanity/types";
import { BodyRenderer } from "../components/BodyRenderer";

const query = `*[_id == "privacyPage"][0]{

}`;

interface PrivacyPage extends SanityDocument {
  preview: boolean;
  body: BodyBlock;
}

const pageService = new SanityPageService<PrivacyPage>(query);

const Privacy: NextPage<PrivacyPage> = (initialData) => {
  const { data } = pageService.getPreviewHook(initialData)();

  return (
    <div className="flex flex-col items-center h-full px-4">
      <BodyRenderer bodyParts={data.body.bodyParts} white />
    </div>
  );
};

export default Privacy;

export const getStaticProps: GetStaticProps = (context) => {
  return pageService.fetchQuery(context);
};
