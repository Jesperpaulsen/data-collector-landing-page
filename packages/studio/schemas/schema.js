import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import components from "./components";
import pages from "./pages";

const schemas = [...components, ...pages];

export default createSchema({
  name: "default",
  types: schemaTypes.concat(schemas),
});
