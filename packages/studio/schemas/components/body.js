export default {
  type: "object",
  name: "body",
  title: "Body",
  fields: [
    {
      name: "bodyParts",
      type: "array",
      title: "Body Parts",
      of: [
        {
          type: "blockContentWrapper",
        },
        {
          type: "defaultImage",
        },
        {
          type: "faqs",
        },
        { type: "signUpForm" },
        { type: "button" },
      ],
    },
  ],
};
