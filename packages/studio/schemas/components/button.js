export default {
  name: "button",
  type: "object",
  title: "Button",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text",
    },
    {
      name: "outline",
      type: "boolean",
      title: "Outline",
      initialValue: false,
    },
    {
      name: "small",
      type: "boolean",
      title: "Small",
      initialValue: false,
    },
    {
      name: "block",
      type: "boolean",
      title: "Block",
      initialValue: false,
    },
    {
      name: "href",
      type: "string",
      title: "URL",
    },
  ],
};
