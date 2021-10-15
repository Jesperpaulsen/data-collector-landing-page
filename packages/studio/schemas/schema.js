import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import components from "./components";

const schemas = [...components];

export default createSchema({
  name: "default",
  types: schemaTypes.concat(schemas),
});
