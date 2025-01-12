import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardContent.css'; // Ensure you include this for the styling

function DashboardContent() {


  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Welcome to the Library Management System</h1>
        <p className="description">Your one-stop solution for managing books and users.</p>
      </header>

      {/* Main Content Section */}
      <section className="content">
        <div className="content-card">
          <h2>Explore Our Collection</h2>
          <p>Discover a wide range of books available in our library.</p>
          <Link to="/bookview">
            <button className="cta-button">View Books</button>
          </Link>
        </div>
        <div className="content-card">
          <h2>Join Our Community</h2>
          <p>Become a member and enjoy exclusive benefits.</p>
          <Link to="/register">
            <button className="cta-button">Register</button>
          </Link>
        </div>
        <div className="content-card">
          <h2>Admin Access</h2>
          <p>Manage books and users with admin privileges.</p>
          <Link to="/addbook">
            <button className="cta-button">Admin Login</button>
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Get Started Today</h2>
        <Link to="/login">
          <button className="cta-button">Login</button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );

}

export default DashboardContent;
