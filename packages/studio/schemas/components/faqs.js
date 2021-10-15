export default {
  name: "faqs",
  type: "object",
  title: "FAQs",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "faq" }],
    },
  ],
};
