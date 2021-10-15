import { BlockContent } from "./BlockContent";
import DefaultImage from "./DefaultImage";
import { FAQs } from "./FAQs";
import { SignUpForm } from "./SignUpForm";

type Bodyparts = (DefaultImage | FAQs | SignUpForm)[];

export interface BodyBlock {
  bodyParts: Bodyparts;
}
