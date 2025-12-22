import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      {/* Gradient + Hover + Active Link Styles */}
      <style>{`
        .navbar-gradient {
          background: linear-gradient(90deg, #78b4f3ff, #8ec5fc, #d6b47eff);
        }

        .nav-link {
          font-weight: 500;
          transition: 0.3s ease;
        }

        .nav-link:hover {
          color: #000 !important;
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #000;
          font-weight: 600;
          border-bottom: 2px solid #ffffff;
        }

        .enroll-btn:hover {
          background: #ffbe55 !important;
          transform: scale(1.05);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg shadow-sm sticky-top navbar-gradient">
        <div className="container">
          
          {/* Logo + Brand */}
          <Link className="navbar-brand nav-link text-dark d-flex align-items-center text-dark" to="/">
            <img
              src={logo}
              alt="School Logo"
              style={{ width: "90px", height: "80px" }}
              className="me-2"
            />
            <span>Shri Sharada Pre-School</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <NavLink end className="nav-link text-dark" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/programs">
                  Programs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/events">
                  Events
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item ms-lg-3">
                <NavLink
                  className="btn btn-dark enroll-btn rounded-pill px-4 border-0"
                  to="/contact"
                >
                  Enroll Now
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
