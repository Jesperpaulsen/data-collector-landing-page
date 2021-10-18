import client from "part:@sanity/base/client";

client
  .withConfig({ apiVersion: "2021-03-25" })
  .delete({ query: '*[_id == "homePage"]' })
  .then(console.log)
  .catch(console.error);
