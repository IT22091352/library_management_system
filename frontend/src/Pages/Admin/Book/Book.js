import React from "react";
import "./book.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const { _id, title, imageURL, author, description } = props.books;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios.delete(`http://localhost:3000/books/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/bookdetails")) 
  };


  return (
    <div className="book-card">
      <h1 className="book-title">{title}</h1>
      <img src={imageURL} alt="book" className="book-image" />
      <h2 className="book-author">Author: {author}</h2>
      <p className="book-description">{description}</p>
      <div className="book-buttons">
        <Link to={`/bookdetails/${_id}`}><button className="book-button">Update</button></Link>
        <button className="book-button" onClick={deleteHandler}>Delete</button>        
      </div>
    </div>
  );
}

export default Book;
