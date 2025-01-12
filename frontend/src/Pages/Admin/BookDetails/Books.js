import React from 'react'
import { useState, useEffect } from 'react';
import NavBar from '../Navbar/Navbar'
import axios from 'axios';
import Book from '../Book/Book';

const URL = "http://localhost:3000/books";
const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
function Books() {
    const [books, setBook] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      if (data && data.books) {
        setBook(data.books);
      } else {
        console.error("Books data is undefined");
      }
    });
  }, []);

  const handleDelete = (id) => {
    setBook((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  return (
    <div>
        <NavBar/>
        <h1>Books details display page</h1>
        <div>
            {books && books.map((book,i) => (
                <div key={i}>
                    <Book books={book} onDelete={handleDelete} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Books