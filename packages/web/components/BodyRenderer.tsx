import React from "react";
import { BodyBlock } from "../types/BodyBlock";
import BlockContentWrapper from "./blockContentWrapper/BlockContentWrapper";
import SignUpForm from "./SignUpForm";

const notImplemented = ({ type }) => <div>Not implemented {type}</div>;

type Props = { [key: string]: any };

const components: { [id: string]: React.FC<Props> } = {
  blockContentWrapper: BlockContentWrapper,
  signUpForm: SignUpForm,
};

export const BodyRenderer: React.FC<BodyBlock> = ({ bodyParts }) => {
  return (
    <>
      {bodyParts.map((bodyPart, i) => {
        const Component = components[bodyPart._type as string];
        if (!Component) {
          throw new Error(
            `No serializer implemented for type ${bodyPart._type}`
          );
        }
        return (
          <Component
            key={(bodyPart._key as string) || `bodyPart-${i}`}
            {...bodyPart}
          />
        );
      })}
    </>
  );
};
