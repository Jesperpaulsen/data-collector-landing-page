import { Block } from "@sanity/types";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import Prose from "../prose/prose";

interface BlockContentWrapperProps {
  blockContent: Block[];
}

const BlockContentWrapper: React.FC<BlockContentWrapperProps> = ({
  blockContent,
}) => {
  return (
    <Prose>
      <BlockContent
        blocks={blockContent}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </Prose>
  );
};

export default BlockContentWrapper;
