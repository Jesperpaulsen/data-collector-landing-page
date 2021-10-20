import { useState } from "react";
import { IFAQs } from "../../types/IFAQs";
import FAQ from "./FAQ";

const FAQs: React.FC<IFAQs> = ({ list, title }) => {
  const [keyThatsOpen, setKeyThatsOpen] = useState("");

  const openFAQ = (key: string) => {
    if (key === keyThatsOpen) setKeyThatsOpen("");
    else setKeyThatsOpen(key);
  };

  return (
    <div>
      <div className="text-2xl pt-4 pb-2">{title}</div>
      <div>
        {list.map((listItem) => (
          <div
            key={listItem._key}
            onClick={() => openFAQ(listItem._key)}
            className="pb-4 w-72 md:w-128 cursor-pointer"
          >
            <hr className="border-black h-2 w-full" />
            <FAQ
              question={listItem.question}
              answer={listItem.answer}
              open={keyThatsOpen === listItem._key}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
