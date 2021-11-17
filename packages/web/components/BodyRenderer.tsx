import React from "react";
import { BodyBlock } from "../types/BodyBlock";
import BlockContentWrapper from "./blockContentWrapper/BlockContentWrapper";
import Button from "./button/Button";
import FAQs from "./faq/FAQs";
import SignUpForm from "./SignUpForm";

// const notImplemented = ({ type }) => <div>Not implemented {type}</div>;

type ComponentProps = { [key: string]: any };

const components: { [id: string]: React.FC<ComponentProps> } = {
  blockContentWrapper: BlockContentWrapper,
  signUpForm: SignUpForm,
  faqs: FAQs,
  button: (props) => {
    return (
      <div className="w-full flex justify-center">
        <Button {...props}>{props.text}</Button>
      </div>
    );
  },
};

interface Props extends BodyBlock {
  white?: boolean;
}

export const BodyRenderer: React.FC<Props> = ({ white = false, bodyParts }) => {
  return (
    <div className={`${white ? "bg-white rounded-2xl p-10 shadow-2xl" : ""}`}>
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
    </div>
  );
};
