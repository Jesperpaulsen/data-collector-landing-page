export default {
  name: "blockContentWrapper",
  type: "object",
  title: "Block Content",
  fields: [
    {
      name: "large",
      type: "boolean",
      title: "Large",
      initialValue: false,
    },
    {
      name: "blockContent",
      type: "blockContent",
      title: "Text",
    },
  ],
};
