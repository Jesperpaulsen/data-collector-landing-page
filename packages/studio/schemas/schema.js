import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import components from "./components";
import pages from "./pages";
import tip from "./tip";

const schemas = [...components, ...pages, tip];

export default createSchema({
  name: "default",
  types: schemaTypes.concat(schemas),
});
