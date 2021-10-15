import { FAQ } from "./FAQ";

export interface FAQs {
  _type: "FAQs";
  title: string;
  list: FAQ[];
}
