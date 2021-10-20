export default {
  name: "faq",
  type: "object",
  title: "FAQ",
  fields: [
    {
      type: "string",
      name: "question",
      title: "Question",
    },
    {
      type: "blockContentWrapper",
      name: "answer",
      title: "Answer",
    },
  ],
};
