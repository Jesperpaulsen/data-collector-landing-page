import { Block } from "@sanity/types";

interface BlockPart extends Block {
  type: "_block";
}

export interface BlockContent {
  text: BlockPart[];
}
