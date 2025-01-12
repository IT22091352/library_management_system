import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Library System</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
