import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kidsImg from "../assets/about-kids.png";

function AboutIntro() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #89b959ff, #6a93c8ff)",
      }}
    >
      <div className="container">
        {/* IMAGE */}
        <div
          className="image-wrapper shadow-sm rounded-4 overflow-hidden mb-4"
          data-aos="zoom-in"
        >
          <img
            src={kidsImg}
            alt="Kids Learning"
            className="img-fluid w-100"
            style={{ maxHeight: "380px", objectFit: "cover" }}
          />
        </div>

        {/* TEXT */}
        <div className="about-content" data-aos="fade-up">
          <h2 className="section-title text-center">
            About <span className="text-warning">Shri Sharada Pre-School</span>
          </h2>

          <p className="text-center mx-auto" style={{ maxWidth: "850px" }}>
            At Shri Sharada Pre-School (C.B.S.E), children learn through joy,
            curiosity, imagination and exploration. We believe learning should feel
            like play — happy, exciting and full of discovery.
          </p>

          <p className="text-center mx-auto mb-4" style={{ maxWidth: "850px" }}>
            Our environment encourages storytelling, music, physical play,
            creativity and values — helping every child become confident,
            expressive and ready for school life.
          </p>

          {/* INFO CARDS */}
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <div
                className="info-box p-4 rounded-4 shadow-sm h-100"
                data-aos="fade-right"
              >
                <h6 className="fw-bold text-warning mb-2">📍 Address</h6>
                <p className="small m-0">
                  Sahakar Colony - 1, Bharat Mata Nagar, Dighi, Pune – 411015
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div
                className="info-box p-4 rounded-4 shadow-sm h-100"
                data-aos="fade-left"
              >
                <h6 className="fw-bold text-warning mb-2">📧 Email</h6>
                <p className="small m-0">shrisharadapreschool@gmail.com</p>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div
            className="about-card rounded-4 p-4 shadow-sm mt-5 mx-auto"
            style={{ maxWidth: "850px" }}
            data-aos="fade-up"
          >
            <h5 className="fw-bold mb-3 text-center text-warning">
              🌟 What Makes Us Special?
            </h5>

            <ul className="list-unstyled small">
              <li>🎨 Activity-based joyful learning</li>
              <li>🗣 English communication & confidence building</li>
              <li>👩‍🏫 Personal attention from experienced teachers</li>
              <li>🥳 Events, competitions & celebrations</li>
              <li>🤝 Active parent-teacher partnership</li>
            </ul>

            <p className="small mt-3 text-center">
              Guided by <strong>Mrs. Shital Sakhare (M.A. English)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style>{`
        #about {
          color: white !important;
        }

        #about p,
        #about h2,
        #about h5,
        #about ul li,
        #about strong {
          color: white !important;
        }

        .info-box:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.2);
          transition: 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-6px);
          box-shadow: 0px 8px 22px rgba(0,0,0,0.08);
          transition: 0.4s ease;
        }
      `}</style>
    </section>
  );
}

export default AboutIntro;
