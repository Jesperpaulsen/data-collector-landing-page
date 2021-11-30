export default {
  name: "tip",
  type: "document",
  title: "Tip",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "published",
      type: "boolean",
      title: "Published",
      initialValue: false,
    },
    {
      name: "message",
      type: "text",
      title: "Message",
    },
  ],
};
