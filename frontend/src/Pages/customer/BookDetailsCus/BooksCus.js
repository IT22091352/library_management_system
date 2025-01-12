import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../Book/BookCus'
import Navbar from '../../customer/Navbar/Navbar'

const URL = "http://localhost:3000/books";
const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
function BooksCus() {
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



  return (
    <div>
        <Navbar/>
        <h1>Books details display page</h1>
        <div>
            {books && books.map((book,i) => (
                <div key={i}>
                    <Book books={book}  />
                </div>
            ))}
        </div>
    </div>
  )
}

export default BooksCus