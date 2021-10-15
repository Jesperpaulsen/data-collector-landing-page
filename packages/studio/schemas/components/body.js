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
          type: "blockContent",
        },
        {
          type: "defaultImage",
        },
        {
          type: "faqs",
        },
        { type: "signUpForm" },
      ],
    },
  ],
};
