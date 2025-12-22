import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kidsImg from "../assets/about-kids.png";
import Marque from "../components/Marque";
import { FaMapMarkerAlt, FaEnvelope, FaStar, FaChild, FaHeart, FaUsers, FaPalette, FaTrophy } from "react-icons/fa";

function AboutIntro() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 50 });
  }, []);

  const features = [
    { icon: <FaPalette className="text-warning" />, text: "Activity-based joyful learning" },
    { icon: <FaChild className="text-info" />, text: "English communication & confidence building" },
    { icon: <FaUsers className="text-success" />, text: "Personal attention from experienced teachers" },
    { icon: <FaTrophy className="text-purple" />, text: "Events, competitions & celebrations" },
    { icon: <FaHeart className="text-danger" />, text: "Active parent-teacher partnership" }
  ];

  return (
    <>
      <style>{`
        #about {
          color: white !important;
          position: relative;
          overflow: hidden;
        }

        #about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
          z-index: 0;
        }

        #about .container {
          position: relative;
          z-index: 1;
        }

        .floating-badge {
          animation: float 3s ease-in-out infinite;
          background: linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .info-box {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .info-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }

        .info-box:hover::before {
          left: 100%;
        }

        .info-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          border-color: rgba(255,255,255,0.4);
        }

        .image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          border: 3px solid rgba(255,255,255,0.3);
        }

        .image-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(106, 147, 200, 0.3));
        }

        .feature-item {
          transition: all 0.3s ease;
          padding: 12px 15px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 10px;
        }

        .feature-item:hover {
          background: rgba(255,255,255,0.2);
          transform: translateX(10px);
        }

        .highlight-text {
          background: linear-gradient(45deg, #f1d695ff, #f8b08dff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .gradient-border {
          position: relative;
          border: double 3px transparent;
          border-radius: 20px;
          background-image: 
            linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
            linear-gradient(45deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }

        .pulse-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #ffd166;
          border-radius: 50%;
          margin-right: 10px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        .text-purple {
          color: #a78bfa;
        }
      `}</style>

      <Marque />

      <section
        id="about"
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #ebed6eff 0%, #8ddce3ff 25%, #89b959 50%, #94c5e8ff 75%, #d1e389ff 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite"
        }}
      >
        <div className="container">
          {/* MAIN IMAGE WITH OVERLAY */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="image-wrapper">
                <img
                  src={kidsImg}
                  alt="Happy Kids Learning at Shri Sharada Pre-School"
                  className="img-fluid w-100"
                  style={{ 
                    maxHeight: "450px", 
                    objectFit: "cover",
                    transform: "scale(1.01)" // Prevent blur on hover
                  }}
                />
                <div className="position-absolute bottom-0 start-0 p-4">
                  <span className="badge bg-warning text-dark p-2 px-3 rounded-pill fs-6">
                    ✨ Where Learning Feels Like Play!
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="ps-lg-4">
                <h6 className="text-uppercase text-warning fw-bold mb-3">
                  <span className="pulse-dot"></span>
                  Welcome to
                </h6>
                <h1 className="display-4 fw-bold mb-4">
                  Shri Sharada <span className="highlight-text">Pre-School</span>
                </h1>
                <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                  Where <span className="fw-bold text-warning">curiosity meets creativity</span> and 
                  every child's potential is nurtured with love and expertise.
                </p>
                
                {/* FLOATING BADGES */}
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <span className="floating-badge rounded-pill py-2 px-4 fw-semibold" style={{ animationDelay: '0s' }}>
                    🏆 Est. 2017
                  </span>
                  <span className="floating-badge rounded-pill py-2 px-4 fw-semibold" style={{ animationDelay: '0.5s' }}>
                    📘 C.B.S.E Affiliated
                  </span>
                  <span className="floating-badge rounded-pill py-2 px-4 fw-semibold" style={{ animationDelay: '1s' }}>
                    🛡️ Safe Environment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MISSION STATEMENT */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div 
                className="gradient-border p-4 p-md-5 text-center mb-5"
                data-aos="zoom-in"
              >
                <p className="fs-3 fst-italic mb-0">
                  "At Shri Sharada, we believe learning should be a joyful adventure — 
                  filled with <span className="text-warning fw-bold">discovery, imagination,</span> and 
                  <span className="text-info fw-bold"> endless possibilities</span>."
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT INFO CARDS */}
          <div className="row g-4 justify-content-center mb-5">
            <div className="col-md-5 col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="info-box p-4 rounded-3 h-100 d-flex align-items-center">
                <div className="me-3">
                  <div className="bg-warning p-3 rounded-circle">
                    <FaMapMarkerAlt size={24} className="text-dark" />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">📍 Our Location</h5>
                  <p className="mb-0 small opacity-90">
                    Sahakar Colony-1, Bharat Mata Nagar,<br />
                    Dighi, Pune – 411015
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-box p-4 rounded-3 h-100 d-flex align-items-center">
                <div className="me-3">
                  <div className="bg-info p-3 rounded-circle">
                    <FaEnvelope size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">📧 Email Us</h5>
                  <p className="mb-0 small opacity-90">
                    shrisharadapreschool@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURES SECTION */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div 
                className="info-box p-4 p-lg-5 rounded-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-center mb-5">
                  <h2 className="fw-bold mb-3">
                    <FaStar className="text-warning me-2" />
                    What Makes Us Special?
                    <FaStar className="text-warning ms-2" />
                  </h2>
                  <p className="opacity-90">
                    We combine traditional values with modern learning approaches
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className="feature-item d-flex align-items-center mb-3"
                        data-aos="fade-right"
                        data-aos-delay={100 * index}
                      >
                        <div className="me-3">
                          {feature.icon}
                        </div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DIRECTOR'S NOTE */}
                <div className="text-center mt-5 pt-4 border-top border-white border-opacity-25">
                  <p className="mb-2">
                    <span className="opacity-75">Guided by</span>
                  </p>
                  <h5 className="fw-bold text-warning mb-0">
                    Mrs. Shital Sakhare (M.A. English)
                  </h5>
                  <p className="small opacity-75 mt-2">
                    Director & Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND ANIMATION STYLES */}
        <style jsx="true">{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>
    </>
  );
}

export default AboutIntro;