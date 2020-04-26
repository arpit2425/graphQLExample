const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require("lodash");
const books = [
  { name: "A book", genre: "Comedy", id: "1" },
  { name: "A book2", genre: "fiction", id: "2" },
  { name: "A book3", genre: "Adventure", id: "3" },
];
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
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
