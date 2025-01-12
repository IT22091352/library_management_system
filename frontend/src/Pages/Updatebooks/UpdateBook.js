import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";

function UpdateBook() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/books/${id}`);
        const data = res.data;
        setInputs(data.book);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert("Book not found.");
        } else {
          console.error("An error occurred:", error);
        }
      }
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/books/${id}`, {
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

  const handelChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/bookdetails"));
  };

  return (
    <div>
      <h1>Update Books</h1>
      <form onSubmit={handelSubmit}>
        <label>Book Title:</label>
        <br />
        <input
          type="text"
          name="title"
          required
          value={inputs.title}
          onChange={handelChange}
        />
        <br />
        <label>Image URL:</label>
        <br />
        <input
          type="text"
          name="imageURL"
          required
          value={inputs.imageURL}
          onChange={handelChange}
        />
        <br />
        <label>Author:</label>
        <br />
        <input
          type="text"
          name="author"
          required
          value={inputs.author}
          onChange={handelChange}
        />
        <br />
        <label>Description:</label>
        <br />
        <input
          type="text"
          name="description"
          required
          value={inputs.description}
          onChange={handelChange}
        />
        <br />
        <br />
        <button>Update Book</button>
      </form>
    </div>
  );
}

export default UpdateBook;
