import React from "react";
import { BodyBlock } from "../types/BodyBlock";

const notImplemented = ({ type }) => <div>Not implemented {type}</div>;

const components: { [id: string]: React.FC<any> } = {
  blockContent: notImplemented,
};

export const BodyRenderer: React.FC<BodyBlock> = ({ bodyParts }) => {
  const res: React.FC<any>[] = [];

  for (const bodyPart of bodyParts) {
    const component = components[bodyPart._type as string];
    if (!component) {
      throw new Error(`No serializer implemented for type ${bodyPart._type}`);
    }
  }
  return res;
};
