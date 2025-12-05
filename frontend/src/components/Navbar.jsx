import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // <-- Import logo properly

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-white sticky-top">
      <div className="container">
        
        {/* Brand + Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="School Logo"
            style={{ width: "90px", height: "80px", borderRadius: "0%" }}
            className="me-2"
          />
          <span>
            Shri Sharada Pre-School
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink end className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/programs">
                Programs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <NavLink className="btn btn-primary rounded-pill px-4" to="/contact">
                Enroll Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
