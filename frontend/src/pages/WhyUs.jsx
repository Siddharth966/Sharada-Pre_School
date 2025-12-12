import React from "react";

const POINTS = [
  {
    title: "Safe & Caring Environment",
    text: "Child-friendly classrooms, constant supervision and warm teachers.",
  },
  {
    title: "Activity-Based Learning",
    text: "Hands-on activities, art, music, stories and outdoor play.",
  },
  {
    title: "Strong English Foundation",
    text: "Focus on vocabulary, phonics and spoken English from early years.",
  },
  {
    title: "Regular Events & Celebrations",
    text: "Annual day, festivals, fancy dress, sports and parent involvement.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-soft-yellow">
      <div className="container">
        <h2 className="section-title text-center">Why Parents Love Us</h2>
        <div className="row g-4 mt-3">
          {POINTS.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="why-card h-100">
                <h6 className="fw-bold mb-2">{item.title}</h6>
                <p className="small text-muted mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
