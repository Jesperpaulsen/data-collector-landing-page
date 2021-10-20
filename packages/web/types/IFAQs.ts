import { IFAQ } from "./IFAQ";

export interface IFAQs {
  _type: "FAQs";
  _key?: string;
  title: string;
  list: IFAQ[];
}
