import DefaultImage from "./DefaultImage";
import { IFAQs } from "./IFAQs";
import { ISignUpForm } from "./ISignUpForm";

type Bodyparts = (DefaultImage | IFAQs | ISignUpForm)[];

export interface BodyBlock {
  bodyParts: Bodyparts;
}
