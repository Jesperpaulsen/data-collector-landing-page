export default {
  type: "document",
  name: "aboutPage",
  title: "About page",
  __experimental_actions: ["create", "update", /* 'delete', */ "publish"],
  fields: [
    {
      name: "body",
      type: "body",
      title: "Body",
    },
  ],
};
