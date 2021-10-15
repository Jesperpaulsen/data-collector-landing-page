export default {
  type: "document",
  name: "homePage",
  title: "Home page",
  __experimental_actions: ["create", "update", /* 'delete', */ "publish"],
  fields: [
    {
      name: "body",
      type: "body",
      title: "Body",
    },
  ],
};
