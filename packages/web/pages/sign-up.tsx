import { GetStaticProps, NextPage } from "next";
import { BodyBlock } from "../types/BodyBlock";
import SanityPageService from "../services/SanityPageService";
import { SanityDocument } from "@sanity/types";
import { BodyRenderer } from "../components/BodyRenderer";

const query = `*[_id == "signUpPage"][0]{

}`;

interface SignupPage extends SanityDocument {
  preview: boolean;
  body: BodyBlock;
}

const pageService = new SanityPageService<SignupPage>(query);

const SignUp: NextPage<SignupPage> = (initialData) => {
  const { data } = pageService.getPreviewHook(initialData)();

  return (
    <div className="flex flex-col items-center h-full px-4 mb-10 text-black">
      <BodyRenderer bodyParts={data.body.bodyParts} />
    </div>
  );
};

export default SignUp;

export const getStaticProps: GetStaticProps = (context) => {
  return pageService.fetchQuery(context);
};
