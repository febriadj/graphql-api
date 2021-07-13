const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { addBook } = require('./mutations/addBook');
const {
  getAllBooks,
  getBookByTitle,
  getBookByCountry,
  getBookByGenre,
} = require('./queries/getBook');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addBook,
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    getAllBooks, getBookByTitle, getBookByCountry, getBookByGenre,
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
