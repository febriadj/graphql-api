const { GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');
const BookType = require('../types/book');
const Books = require('../../models/books');

exports.addBook = {
  type: BookType,
  args: {
    title: { type: GraphQLString },
    genre: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))),
    },
    country: { type: GraphQLString },
  },
  resolve(parent, args) {
    const { title, genre, country } = args;
    const book = new Books({
      title, genre, country,
    });

    return book.save();
  },
};
