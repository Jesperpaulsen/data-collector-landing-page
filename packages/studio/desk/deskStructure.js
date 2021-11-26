import S from "@sanity/desk-tool/structure-builder";
import { getPreview } from "./utils/getPreview";
import {
  FiHome,
  FiInfo,
  FiGrid,
  FiArchive,
  FiEdit2,
  FiBookmark,
} from "react-icons/fi";

export const getDefaultDocumentNode = ({ schemaType }) =>
  S.document().views(getPreview(schemaType));

export default () => {
  return S.list()
    .title("Website")
    .items([
      S.listItem()
        .title("Home")
        .child(
          S.editor()
            .id("homePage")
            .schemaType("homePage")
            .documentId("homePage")
            .views(getPreview("homePage"))
        )
        .icon(FiHome),
      S.listItem()
        .title("Sign Up")
        .child(
          S.editor()
            .id("signUpPage")
            .schemaType("signUpPage")
            .documentId("signUpPage")
            .views(getPreview("signUpPage"))
        )
        .icon(FiEdit2),
      S.listItem()
        .title("About")
        .child(
          S.editor()
            .id("aboutPage")
            .schemaType("aboutPage")
            .documentId("aboutPage")
            .views(getPreview("aboutPage"))
        )
        .icon(FiInfo),
      S.listItem()
        .title("Faq Page")
        .child(
          S.editor()
            .id("faqPage")
            .schemaType("faqPage")
            .documentId("faqPage")
            .views(getPreview("faqPage"))
        )
        .icon(FiGrid),
      S.listItem()
        .title("Privacy Page")
        .child(
          S.editor()
            .id("privacyPage")
            .schemaType("privacyPage")
            .documentId("privacyPage")
            .views(getPreview("privacyPage"))
        )
        .icon(FiArchive),
      S.divider(),
      S.listItem()
        .title("Tips")
        .child(S.documentTypeList("tip").title("Tips"))
        .icon(FiBookmark),
    ]);
};
