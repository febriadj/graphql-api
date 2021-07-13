const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
  },
  country: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const books = model('books', BookSchema);
module.exports = books;
