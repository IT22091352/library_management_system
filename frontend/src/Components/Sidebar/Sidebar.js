// Sidebar.js
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/"><li>Dashboard</li></Link>
        <Link to="/addbook"><li>Admin</li></Link>
        <Link to="/bookview"> <li>Customer</li></Link>
        
        
       
      </ul>
    </div>
  );
}

export default Sidebar;
