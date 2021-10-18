import DefaultImage from "./DefaultImage";
import { FAQs } from "./FAQs";
import { ISignUpForm } from "./SignUpForm";

type Bodyparts = (DefaultImage | FAQs | ISignUpForm)[];

export interface BodyBlock {
  bodyParts: Bodyparts;
}
