import { Block } from "@sanity/types/dist/dts";

export interface IFAQ {
  _key?: string;
  question: string;
  answer: { blockContent: Block[] };
}
