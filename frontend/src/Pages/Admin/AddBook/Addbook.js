import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addbook.css";

function Addbook() {
  const history = useNavigate();
  const [inputs, setInputs] = React.useState({
    title: "",
    imageURL: "",
    author: "",
    description: "",
  });

  const handelChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/bookdetails"));
  };
  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:3000/books", {
        title: String(inputs.title),
        imageURL: String(inputs.imageURL),
        author: String(inputs.author),
        description: String(inputs.description),
      });
      console.log(res.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Add Book</h1>
        <form onSubmit={handelSubmit}>
          <div className="form-group">
            <label>Book Title:</label>
            <input
              type="text"
              name="title"
              required
              value={inputs.title}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              name="imageURL"
              required
              value={inputs.imageURL}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              name="author"
              required
              value={inputs.author}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              required
              value={inputs.description}
              onChange={handelChange}
            />
          </div>
          <button className="submit-button">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Addbook;
