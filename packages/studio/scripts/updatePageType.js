import client from "part:@sanity/base/client";

const fetchDocument = (query) => {
  return client
    .withConfig({ apiVersion: "2021-03-25", useCdn: false })
    .fetch(query);
};

const deleteDocument = (query) => {
  return client
    .withConfig({ apiVersion: "2021-03-25", useCdn: false })
    .delete({ query });
};

const addDocument = (document) => {
  return client
    .withConfig({ apiVersion: "2021-03-25", useCdn: false })
    .create(document);
};

const idsToUpdate = ["homePage", "aboutPage", "faqPage", "privacyPage"];

const correctType = async () => {
  for (const id of idsToUpdate) {
    const query = `*[_id == "drafts.${id}"][0]`;
    const doc = await fetchDocument(query);
    if (!doc) continue;
    console.log(doc);
    await deleteDocument(query);
    doc._type = id;
    await addDocument(doc);
  }
};

correctType().catch((e) => process.exit(1));
