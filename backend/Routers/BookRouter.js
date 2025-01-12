const express = require('express');
const router = express.Router();

//Insert the Book model
const book = require("../Models/Book");
//Insert book controller
const BookController = require("../Controllers/BookControler");

//Get all books
router.get('/', BookController.getAllBooks);
router.post('/', BookController.addbook);
router.get('/:id', BookController.getBookById);
router.put('/:id', BookController.updatebook);
router.delete('/:id', BookController.deletebook);

module.exports = router;