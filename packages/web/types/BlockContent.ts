import { Block } from "@sanity/types";

interface BlockPart extends Block {
  type: "_block";
}

export type BlockContent = BlockPart[];
