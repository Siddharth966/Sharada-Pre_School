import React from "react";
import Marque from "../components/Marque";

function ContactSection({ showTitle = true }) {
  return (
    <>
      <Marque />

      <section
        id="contact"
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #e6a8ecff, #a8e8b1ff)",
        }}
      >
        <div className="container">
          {showTitle && (
            <>
              <h2 className="section-title text-center">
                Contact & Admissions
              </h2>
              <p className="text-muted text-center mb-5">
                Visit our campus or call us to know more about admissions,
                timings and fee structure.
              </p>
            </>
          )}

          <div className="row g-4">
            {/* LEFT: CONTACT DETAILS */}
            <div className="col-lg-6">
              <div className="contact-card shadow-sm h-100 p-4 rounded-4 bg-white">
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
                    />
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

            {/* RIGHT: GOOGLE MAP */}
            <div className="col-lg-6">
              <div className="map-card h-100 rounded-4 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8782108141645!2d73.8657686749401!3d18.624546882489373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c76ad6ce0869%3A0xe7069e274ad340d3!2sSHREE%20SHARADA%20PRE%20SCHOOL!5e0!3m2!1sen!2sin!4v1766396947040!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Sharada Pre School Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
