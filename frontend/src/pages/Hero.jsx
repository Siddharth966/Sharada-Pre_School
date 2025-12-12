import React from "react";
import { Link } from "react-router-dom";
import kidsImg from "../assets/group.avif";
import Marque from "../components/Marque";
import WhyUs from "./WhyUs";
  

function Hero() {
  return (
    <>
    <style>{`
        .hero-section {
          background: linear-gradient(135deg, #5fa8f5, #8ec5fc, #ffc971);
          overflow: hidden;
          position: relative;
        }
        .floating-ball {
          position: absolute;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: white;
          opacity: 0.3;
          animation: float 6s infinite ease-in-out;
        }

        .ball-1 { top: 20%; left: 10%; animation-duration: 5s; }
        .ball-2 { bottom: 10%; right: 15%; animation-duration: 7s; }
        .ball-3 { top: 40%; right: 30%; animation-duration: 6.5s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        .hero-img {
          max-width: 400px;
          animation: slow-bounce 3s infinite ease-in-out;
        }

        @keyframes slow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .highlight {
          animation: glow 2.5s infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
          to { text-shadow: 0 0 15px rgba(255,255,255,0.9); }
        }

        .fade-in { animation: fadeIn 1.2s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Marque/>

      <header id="home" className="hero-section text-black">
        <div className="container py-5">
          <div className="row align-items-center">
            
            {/* TEXT LEFT */}
            <div className="col-lg-6 fade-in">
              <p className="badge rounded-pill bg-white text-primary fw-semibold shadow-sm">
                Reg. No.: 486/2017 · C.B.S.E Affiliated
              </p>

              <h1 className="display-5 fw-bold mb-3">
                A Happy Start to Your <br/>
                <span className="text-black highlight">Child’s Learning Journey</span>
              </h1>

              <p className="lead text-bs-dark-bg-subtle opacity-75 mb-4">
                A safe learning place where kids explore, imagine, create and grow with joy.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-warning btn-lg rounded-pill px-4">
                  Schedule a Visit
                </Link>

                <a href="tel:+919011240081" className="btn btn-outline-light btn-lg rounded-pill px-4">
                  Call Now 📞
                </a>
              </div>

              <div className="mt-4 medium text-danger opacity-75">
                Guided by: <strong>Mrs. Shital Sakhare (M.A. English)</strong>
              </div>
            </div>

            {/* RIGHT SIDE — KIDS ILLUSTRATION */}
              <div className="col-lg-6 text-center mt-5 mt-lg-0 bounce-animation">
              <img 
                src={kidsImg}
                alt="Kids Playing"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </header>

      <WhyUs/>
    </>
  );
}

export default Hero;
