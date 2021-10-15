import { FAQ } from "./FAQ";

export interface FAQs {
  _type: "FAQs";
  _key?: string;
  title: string;
  list: FAQ[];
}
