const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const BookSchema = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookSchema,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {},
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
