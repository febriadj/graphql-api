const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { getAllBooks } = require('./queries/getBook');
const { addBook } = require('./mutations/addBook');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addBook,
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    getAllBooks,
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
