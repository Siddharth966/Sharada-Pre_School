import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // Add your school logo here

function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 text-center text-md-start">

          {/* Logo + About */}
          <div className="col-md-3">
            <img src={logo} alt="School Logo" className="footer-logo mb-3" />
            <p className="small">
              Building confident, creative and happy learners through joyful learning, activities and values.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/contact">Admission</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled small footer-links">
              <li><FaPhoneAlt className="me-2" /> +91 XXXXX XXXXX</li>
              <li><FaEnvelope className="me-2" /> shrisharadapreschool@gmail.com</li>
              <li>
                <FaMapMarkerAlt className="me-2" /> Sahakar Colony - 1, Bharat Mata Nagar, Dighi, Pune
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://www.facebook.com/" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" className="social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" className="social-icon"><FaLinkedinIn /></a>
              <a href="https://www.twitter.com/" className="social-icon"><FaTwitter /></a>
              <a href="https://www.youtube.com/" className="social-icon"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <hr className="my-3 border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} Shri Sharada Pre-School (C.B.S.E), Pune <br />
          Managed by <strong>Shri Sharada Education Trust</strong>
        </div>
      </div>

      {/* Styling */}
      <style>{`
        .footer {
          background: #03031edc;
        }

        .footer-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          text-decoration: none;
          color: #e9eef7;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #ffdd57;
          padding-left: 5px;
        }

        .social-icon {
          font-size: 20px;
          color: white;
          background: rgba(255,255,255,0.2);
          padding: 5px;
          border-radius: 30%;
          transition: 0.3s;
        }

        .social-icon:hover {
          background: #ffdd57;
          color: #0c4c92;
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
