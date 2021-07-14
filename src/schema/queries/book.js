const { GraphQLList, GraphQLString } = require('graphql');
const BookType = require('../types/book');
const Books = require('../../models/books');

exports.getAllBooks = {
  type: new GraphQLList(BookType),
  resolve() {
    return Books.find().sort({ createdAt: -1 });
  },
};

exports.getBookByTitle = {
  type: BookType,
  args: {
    title: { type: GraphQLString },
  },
  resolve(parent, args) {
    const title = new RegExp(args.title, 'gi');
    return Books.findOne({ title });
  },
};

exports.getBookByCountry = {
  type: new GraphQLList(BookType),
  args: {
    country: { type: GraphQLString },
  },
  resolve(parent, args) {
    const country = new RegExp(args.country, 'gi');
    return Books.find({ country });
  },
};

exports.getBookByGenre = {
  type: new GraphQLList(BookType),
  args: {
    genre: { type: new GraphQLList(GraphQLString) },
  },
  resolve(parent, args) {
    const genre = new RegExp(args.genre, 'gi');

    return Books.find({
      genre: { $all: genre },
    });
  },
};
