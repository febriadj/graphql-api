const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { addBook, deleteBook, updateBook } = require('./mutations/book');
const {
  getAllBooks,
  getBookByTitle,
  getBookByCountry,
  getBookByGenre,
} = require('./queries/book');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addBook, deleteBook, updateBook,
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
