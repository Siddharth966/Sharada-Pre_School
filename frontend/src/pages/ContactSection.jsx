import React from "react";
import Marque from "../components/Marque";

function ContactSection({ showTitle = true }) {
  return (
    <>
    <Marque/>
    <section id="contact" className="section-padding"style={{
        background: "linear-gradient(135deg, #e6a8ecff, #a8e8b1ff)",
      }}>
      <div className="container">
        {showTitle && (
          <>
            <h2 className="section-title text-center">Contact & Admissions</h2>
            <p className="text-muted text-center mb-5">
              Visit our campus or call us to know more about admissions,
              timings and fee structure.
            </p>
          </>
        )}

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-card shadow-sm h-100">
              <h5 className="fw-bold mb-3">School Address</h5>
              <p className="mb-2">
                Sr. No. 75, Sahakar Colony - 1, Bharat Mata Nagar,
                <br />
                Dighi, Pune - 411 015
              </p>
              <p className="mb-2">
                <strong>Mobile:</strong> +91 9011240081, +91 9767208408
              </p>
              <p className="mb-4">
                <strong>Email:</strong> shrisharadapreschool@gmail.com
              </p>

              <h6 className="fw-semibold mb-2">Quick Enquiry</h6>
              <form className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Parent Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Child's Age"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill px-4"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="map-card h-100">
              <iframe
                title="Shri Sharada Pre-School Location"
                /* 👉 Replace src below with your actual Google Maps embed link */
                src="https://www.google.com/maps/embed?pb="
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default ContactSection;
