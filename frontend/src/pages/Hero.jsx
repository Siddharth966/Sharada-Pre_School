import React from "react";
import { Link } from "react-router-dom";
import kidsImg from "../assets/group.avif";
import bg1 from "../assets/hero.png";
import bg2 from "../assets/about-kids.png";
import bg3 from "../assets/hero.png";
import Marque from "../components/Marque";
import WhyUs from "./WhyUs";

function Hero() {
  return (
    <>
      {/* ===================== ALL EFFECTS CSS ===================== */}
      <style>{`
        /* HERO SECTION */
        .hero-slide {
          height: 85vh;
          min-height: 600px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Background Images with gradient overlay */
        .bg-slide-1 { 
          background-image: linear-gradient(rgba(23, 73, 126, 0.85), rgba(23, 73, 126, 0.9)), url(${bg1}); 
        }
        .bg-slide-2 { 
          background-image: linear-gradient(rgba(46, 125, 50, 0.85), rgba(46, 125, 50, 0.9)), url(${bg2}); 
        }
        .bg-slide-3 { 
          background-image: linear-gradient(rgba(183, 28, 28, 0.85), rgba(183, 28, 28, 0.9)), url(${bg3}); 
        }

        /* Smooth slide transition */
        .carousel-item {
          transition: transform 1.2s ease-in-out, opacity 1.2s ease-in-out;
        }

        /* CONTENT STYLING */
        .hero-content {
          position: relative;
          z-index: 2;
        }

        /* MAIN CARD DESIGN */
        .main-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        /* BADGE STYLING */
        .info-badge {
          background: linear-gradient(135deg, #4CAF50, #2E7D32);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        /* HEADLINE STYLING */
        .hero-headline {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #2c3e50;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero-headline .highlight {
          background: linear-gradient(135deg, #FF9800, #FF5722);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .hero-headline .highlight::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #FF9800, #FF5722);
          border-radius: 2px;
        }

        /* SUBTITLE */
        .hero-subtitle {
          font-size: 1.2rem;
          color: #5a6c7d;
          margin-bottom: 30px;
          line-height: 1.6;
          max-width: 600px;
        }

        /* BUTTON STYLING */
        .cta-button {
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          cursor: pointer;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #FF9800, #FF5722);
          color: white;
          box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
        }

        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 152, 0, 0.5);
        }

        .cta-button.secondary {
          background: white;
          color: #2c3e50;
          border: 2px solid #e0e0e0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .cta-button.secondary:hover {
          transform: translateY(-3px);
          border-color: #FF9800;
          box-shadow: 0 8px 20px rgba(255, 152, 0, 0.2);
        }

        /* HERO IMAGE */
        .hero-image-container {
          position: relative;
          padding: 20px;
        }

        .hero-image {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
          transition: transform 0.5s ease;
          border: 8px solid white;
        }

        .hero-image:hover {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
        }

        /* FLOATING SHAPES */
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 20s infinite linear;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          background: #d5a76aff;
          top: 10%;
          left: 5%;
          animation-duration: 25s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          background: #eeece5ff;
          bottom: 15%;
          right: 10%;
          animation-duration: 30s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          background: #FF9800;
          top: 40%;
          right: 20%;
          animation-duration: 20s;
        }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }

        /* CAROUSEL INDICATORS */
        .carousel-indicators button {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50%;
          margin: 0 8px !important;
          border: 2px solid white;
          background: transparent;
        }

        .carousel-indicators button.active {
          background: white;
          transform: scale(1.2);
        }

        /* CAROUSEL CONTROLS */
        .carousel-control-prev,
        .carousel-control-next {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          backdrop-filter: blur(10px);
          margin: 0 20px;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 992px) {
          .hero-slide {
            height: auto;
            min-height: auto;
            padding: 60px 0;
          }

          .hero-headline {
            font-size: 2.5rem;
          }

          .main-card {
            padding: 30px;
            margin-bottom: 30px;
          }

          .hero-image-container {
            margin-top: 30px;
          }

          .cta-button {
            padding: 12px 24px;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .main-card {
            padding: 25px 20px;
            border-radius: 20px;
          }

          .info-badge {
            font-size: 0.8rem;
            padding: 8px 16px;
          }

          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .hero-headline {
            font-size: 1.8rem;
          }

          .button-group {
            flex-direction: column;
            gap: 15px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        /* ANIMATIONS */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        /* DECORATIVE ELEMENTS */
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.3);
          pointer-events: none;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          right: -150px;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -100px;
          left: -100px;
        }
      `}</style>

      {/* Announcement Bar */}
      <Marque />

      {/* ===================== HERO CAROUSEL ===================== */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          {/* ===================== SLIDE 1: WELCOME ===================== */}
          <div className="carousel-item active">
            <div className="hero-slide bg-slide-1">
              {/* Decorative Circles */}
              <div className="decorative-circle circle-1"></div>
              <div className="decorative-circle circle-2"></div>
              
              {/* Floating Shapes */}
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>

              <div className="container hero-content">
                <div className="row align-items-center">
                  
                  {/* Left Content */}
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="main-card animate-fade-in">
                      <div className="info-badge">
                        📚 Est. 2017 • C.B.S.E Affiliated • Safe & Secure Environment
                      </div>

                      <h1 className="hero-headline">
                        Where Little Minds <br />
                        <span className="highlight">Blossom & Grow</span>
                      </h1>

                      <p className="hero-subtitle delay-1">
                        A nurturing preschool that provides a warm, stimulating environment 
                        where children discover the joy of learning through play, creativity, 
                        and exploration.
                      </p>

                      <div className="button-group d-flex gap-3 delay-2">
                        <Link to="/admission" className="cta-button primary">
                          <span>🏫 Schedule a Tour</span>
                        </Link>
                        
                        <a href="tel:+919011240081" className="cta-button secondary">
                          <span>📞 Call: +91 90112 40081</span>
                        </a>
                      </div>

                      <div className="mt-4 pt-3 delay-2">
                        <div className="d-flex align-items-center gap-4">
                          <div className="d-flex align-items-center">
                            <div className="bg-success rounded-circle p-2 me-2">
                              <span className="text-white">✓</span>
                            </div>
                            <small>Age 2-6 Years</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="bg-primary rounded-circle p-2 me-2">
                              <span className="text-white">✓</span>
                            </div>
                            <small>Experienced Staff</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="bg-warning rounded-circle p-2 me-2">
                              <span className="text-white">✓</span>
                            </div>
                            <small>Play-Based Learning</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="col-lg-6">
                    <div className="hero-image-container animate-fade-in delay-1">
                      <img 
                        src={kidsImg} 
                        alt="Happy children playing and learning" 
                        className="hero-image img-fluid" 
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ===================== SLIDE 2: LEARNING ===================== */}
          <div className="carousel-item">
            <div className="hero-slide bg-slide-2">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>

              <div className="container hero-content">
                <div className="row align-items-center">
                  
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="main-card">
                      <div className="info-badge" style={{background: "linear-gradient(135deg, #2196F3, #0D47A1)"}}>
                        🎨 Creative Learning • 🧠 Cognitive Development
                      </div>

                      <h1 className="hero-headline">
                        Learning Through <br />
                        <span className="highlight">Play & Discovery</span>
                      </h1>

                      <p className="hero-subtitle">
                        Our innovative curriculum combines Montessori principles with 
                        modern teaching methods to foster curiosity, creativity, and 
                        critical thinking in young learners.
                      </p>

                      <div className="button-group d-flex gap-3">
                        <Link to="/programs" className="cta-button primary">
                          <span>📚 Explore Programs</span>
                        </Link>
                        
                        <Link to="/gallery" className="cta-button secondary">
                          <span>📸 View Gallery</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="hero-image-container">
                      <img 
                        src={kidsImg} 
                        alt="Children engaged in creative activities" 
                        className="hero-image img-fluid" 
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ===================== SLIDE 3: ENVIRONMENT ===================== */}
          <div className="carousel-item">
            <div className="hero-slide bg-slide-3">
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>

              <div className="container hero-content">
                <div className="row align-items-center">
                  
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <div className="main-card">
                      <div className="info-badge" style={{background: "linear-gradient(135deg, #9C27B0, #6A1B9A)"}}>
                        🛡️ Safe Environment • ❤️ Nurturing Care
                      </div>

                      <h1 className="hero-headline">
                        A Second Home <br />
                        <span className="highlight">For Your Child</span>
                      </h1>

                      <p className="hero-subtitle">
                        We provide a secure, loving environment where children feel 
                        confident to explore, make friends, and develop essential 
                        social and emotional skills.
                      </p>

                      <div className="button-group d-flex gap-3">
                        <Link to="/facilities" className="cta-button primary">
                          <span>🏫 Our Facilities</span>
                        </Link>
                        
                        <Link to="/testimonials" className="cta-button secondary">
                          <span>⭐ Parent Reviews</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="hero-image-container">
                      <img 
                        src={kidsImg} 
                        alt="Safe and nurturing preschool environment" 
                        className="hero-image img-fluid" 
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Next Section */}
      <WhyUs />
    </>
  );
}

export default Hero;