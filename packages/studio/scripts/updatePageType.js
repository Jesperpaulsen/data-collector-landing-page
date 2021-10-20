import client from "part:@sanity/base/client";

const fetchDocument = (query) => {
  return client.withConfig({ apiVersion: "2021-03-25" }).fetch(query);
};

const deleteDocument = (query) => {
  return client.withConfig({ apiVersion: "2021-03-25" }).delete({ query });
};

const addDocument = (document) => {
  return client.withConfig({ apiVersion: "2021-03-25" }).create(document);
};

const idsToUpdate = ["homePage", "aboutPage", "faqPage", "privacyPage"];

const correctType = async () => {
  let promises = [];

  for (const id of idsToUpdate) {
    promises.push(fetchDocument(`*[_id == "${id}"][0]`));
  }

  const documents = await Promise.all(promises);

  for (const doc of documents) {
    try {
      await deleteDocument(`*[_id == "${doc._id}"][0]`);
      doc._type = doc._id;
      await addDocument(doc);
    } catch (e) {
      console.log(e);
    }
  }
};

correctType().catch((e) => process.exit(1));
