const express = require("express");
const app = express();
const graphhhtp = require("express-graphql");
app.use("/graphql", graphhhtp({}));
app.listen(4000, () => {
  console.log("Listening on port");
});
