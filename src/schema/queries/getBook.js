const { GraphQLList } = require('graphql');
const BookType = require('../types/book');
const Books = require('../../models/books');

exports.getAllBooks = {
  type: new GraphQLList(BookType),
  resolve() {
    return Books.find();
  },
};
