import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";
import Books from "./Pages/Admin/BookDetails/Books";
import Addbook from "./Pages/Admin/AddBook/Addbook";
import UpdateBook from './Pages/Admin/Updatebooks/UpdateBook';
import BookCus from './Pages/customer/BookDetailsCus/BooksCus';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/bookdetails" element={<Books />} />
        <Route path="/bookdetails/:id" element={<UpdateBook />} />
        <Route path="/bookview" element={<BookCus/>} />
      </Routes>
    </div>
  );
}

export default App;