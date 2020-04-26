const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const BookSchema = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
