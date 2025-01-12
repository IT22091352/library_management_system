import React from "react";
import "../../customer/Book/Book.css";

function Book(props) {
  const {  title, imageURL, author, description } = props.books;
  


  return (
    <div className="book-card">
      <h1 className="book-title">{title}</h1>
      <img src={imageURL} alt="book" className="book-image" />
      <h2 className="book-author">Author: {author}</h2>
      <p className="book-description">{description}</p>
      
    </div>
  );
}

export default Book;
