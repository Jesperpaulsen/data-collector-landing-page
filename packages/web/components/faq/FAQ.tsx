import { IFAQ } from "../../types/IFAQ";
import BlockContentWrapper from "../blockContentWrapper/BlockContentWrapper";

interface Props extends IFAQ {
  open: boolean;
}

const FAQ: React.FC<Props> = ({ question, answer, open }) => {
  return (
    <div className="text-left">
      <div className="flex justify-between items-center">
        <div className="text-lg">{question}</div>
        <div
          className={`${
            open ? "rotate-180 " : "rotate-0"
          } transform transition duration-150`}
        >
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L8 8L1 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {open && <BlockContentWrapper blockContent={answer.blockContent} />}
    </div>
  );
};

export default FAQ;
