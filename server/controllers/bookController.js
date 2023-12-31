const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const getBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOne({ _id: bookId });

    if (!book) {
      return res.status(404).json({ msg: `No book with id: ${bookId}` });
    }

    res.status(200).json({ book });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ msg: `No book with id: ${bookId}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOneAndDelete({ _id: bookId });

    if (!book) {
      return res.status(404).json({ msg: `No book with id: ${bookId}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

module.exports = { getAllBooks, createBook, getBook, updateBook, deleteBook };
