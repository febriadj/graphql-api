const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} = require('graphql');

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

exports.deleteBook = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Books.findOneAndDelete({
      _id: args.id,
    });
  },
};

exports.updateBook = {
  type: BookType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))),
    },
    country: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    const { title, genre, country } = args;

    const book = await Books.findOneAndUpdate({
      title, genre, country,
    });

    return book;
  },
};
