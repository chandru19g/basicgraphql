const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const resolvers = require("./resolvers");
const schema = require("./schema");

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with Graphql");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => console.log("Running at 8082"));
