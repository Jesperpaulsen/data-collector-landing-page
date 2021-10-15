export default {
  type: "document",
  name: "faqPage",
  title: "Faq page",
  __experimental_actions: ["create", "update", /* 'delete', */ "publish"],
  fields: [
    {
      name: "body",
      type: "body",
      title: "Body",
    },
  ],
};
