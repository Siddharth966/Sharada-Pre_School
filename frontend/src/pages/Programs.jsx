import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marque from "../components/Marque";

const PROGRAMS = [
  {
    title: "Play Group",
    age: "Age 2 – 3 years",
    icon: "🧸",
    desc: "A gentle introduction to school filled with sensory play, music, rhymes, free play and early social interaction.",
    features: ["Motor Skills", "Music & Rhythm", "Free Play", "Story Time"],
  },
  {
    title: "Nursery",
    age: "Age 3 – 4 years",
    icon: "🎨",
    desc: "Focus on fine motor development, early recognition of shapes, colours, alphabets and playful learning.",
    features: [
      "Art & Craft",
      "Alphabet Recognition",
      "Group Activity",
      "Shape & Colour Learning",
    ],
  },
  {
    title: "Junior KG",
    age: "Age 4 – 5 years",
    icon: "📚",
    desc: "Building pre-reading, number sense, conversation skills and confidence through joyful learning.",
    features: ["Phonics", "Counting", "Classroom Manners", "Creative Learning"],
  },
  {
    title: "Senior KG",
    age: "Age 5 – 6 years",
    icon: "🎓",
    desc: "School readiness program focusing on writing, reading, early math and confidence-based learning.",
    features: [
      "Reading Fluency",
      "Writing Skills",
      "Basic Arithmetic",
      "Confidence Building",
    ],
  },
];

function Programs() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
    <Marque/>
    <section
      id="programs"
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #d6d38bff, #90ebbeff)",
      }}
    >
      <div className="container">
        <h2 className="section-title text-center mb-2" data-aos="fade-down">
          Our Learning Programs
        </h2>
        <p className="text-muted text-center mb-5" data-aos="fade-up">
          Designed specially for every stage of your child's early growing
          years.
        </p>

        <div className="row g-4">
          {PROGRAMS.map((program, i) => (
            <div
              className="col-md-6 col-lg-3"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div
                className="program-card h-100 p-3 rounded-4 shadow-sm text-center transition"
                style={{
                  background: "linear-gradient(135deg, #e6e7dbff, #c0a14eff)",
                  border: "2px solid rgba(255,255,255,0.5)",
                }}
              >
                <div className="program-icon display-4 mb-3">
                  {program.icon}
                </div>

                <div className="badge bg-warning text-dark px-3 py-1 rounded-pill mb-2 fw-semibold">
                  {program.age}
                </div>

                <h5 className="fw-bold mb-2 text-primary">{program.title}</h5>
                <p className="small text-muted">{program.desc}</p>

                {/* Features */}
                <ul className="list-unstyled small mt-3 text-secondary">
                  {program.features.map((f, index) => (
                    <li key={index}>⭐ {f}</li>
                  ))}
                </ul>

                <button className="btn btn-outline-primary rounded-pill mt-3 px-4 small fw-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styling for hover effects */}
      <style>{`
        .program-card:hover {
          transform: translateY(-6px);
          transition: 0.4s ease;
        }
        .program-icon {
          animation: float 3s infinite ease-in-out;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
          
      `}</style>
    </section>
    </>
  );
}

export default Programs;
