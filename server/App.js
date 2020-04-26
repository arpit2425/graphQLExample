const express = require("express");
const app = express();
const graphhhtp = require("express-graphql");
const schema = require("./Schema/Schema");
app.use("/graphql", graphhhtp({ schema, graphiql: true }));
app.listen(4000, () => {
  console.log("Listening on port");
});
