const Book = require("../Models/Book");

//get all books
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
  if (!books || books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

//add a new book
const addbook = async (req, res, next) => {
  const { title, imageURL, author, description } = req.body;
  let books;
  try {
    books = new Book({
      title,
      imageURL,
      author,
      description,
    });
    await books.save();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
  if (!books) {
    return res.status(400).json({ message: "Book not added" });
  }
  return res.status(200).json({ books });
};

//find by id
const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ book });
};
//update book
const updatebook = async (req, res, next) => {
  const id = req.params.id;
  const { title, imageURL, author, description } = req.body;
  
  let book;
  try {
    book = await Book.findByIdAndUpdate(
        id,
        { title, imageURL, author, description },
        { new: true }
    );

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ book });
};

//delete books
const deletebook = async (req, res, next) => {
    const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({ book });
};

exports.getAllBooks = getAllBooks;
exports.addbook = addbook;
exports.getBookById = getBookById;
exports.updatebook = updatebook;
exports.deletebook = deletebook;