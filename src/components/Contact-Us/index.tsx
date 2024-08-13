import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastify-js/src/toastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  return (
    <div style={{ color: "#545554" }}>
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div
                className="h-100 bg-light rounded d-flex flex-column align-items-center p-2"
                style={{ backgroundColor: "#EDECEB !important" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <p
                    style={{ fontWeight: "bold", color: "#545554" }}
                    className="mb-0 me-2"
                  >
                    Address
                  </p>
                  <span
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: "35px", height: "35px", marginLeft: "12px" }}
                  >
                    <i style={{ color: "#dd1f57" }} className="fa fa-map-marker-alt"></i>
                  </span>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <a
                      href="https://www.google.com/maps/place/Oakgate+Vacation+Rental/@34.0792414,-118.1390555,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c5932d9e892d:0x2375d88578d9237c!8m2!3d34.0792252!4d-118.119593!16s%2Fg%2F11p_26ym5v?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#545554" }}
                    >
                      303 E Valley Blvd Suite #C
                      <br />
                      Alhambra, CA 91801
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="h-100 bg-light rounded d-flex flex-column align-items-center p-2"
                style={{ backgroundColor: "#EDECEB !important" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <p
                    style={{ fontWeight: "bold", color: "#545554" }}
                    className="mb-0 me-2"
                  >
                    Call Us Now
                  </p>
                  <span
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: "35px", height: "35px", marginLeft: "12px" }}
                  >
                    <i style={{ color: "#dd1f57" }} className="fa fa-phone-alt"></i>
                  </span>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <span style={{ color: "#545554", fontWeight: "bold" }}>
                      General phone line for sales:
                    </span>
                    <br />
                    <a href="tel:+16264088009" style={{ color: "#545554 !important" }}>
                      +1(626)-408-8009
                    </a>
                    <br />
                    <br />
                  </p>
                  <p className="mb-0">
                    <span style={{ color: "#545554", fontWeight: "bold" }}>
                      Guest Concierge line:
                    </span>
                    <br />
                    <a href="tel:+16267883387" style={{ color: "#545554" }}>
                      +1(626)-788-3387
                    </a>
                    <br />
                    <br />
                  </p>
                  <p className="mb-0">
                    <span style={{ color: "#545554", fontWeight: "bold" }}>
                      Tenant Direct line:
                    </span>
                    <br />
                    <a href="tel:+16264088009" style={{ color: "#545554" }}>
                      +1(626)-408-8009
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="h-100 bg-light rounded d-flex flex-column align-items-center p-2"
                style={{ backgroundColor: "#EDECEB !important" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <p
                    style={{ fontWeight: "bold", color: "#545554" }}
                    className="mb-0 me-2"
                  >
                    Mail Us Now
                  </p>
                  <span
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: "35px", height: "35px", marginLeft: "12px" }}
                  >
                    <i style={{ color: "#dd1f57" }} className="fa fa-envelope-open"></i>
                  </span>
                </div>
                <div className="text-center">
                  <p className="mb-0">
                    <a
                      href="mailto:inquiry@oakgateco.com"
                      style={{ color: "#545554" }}
                    >
                      inquiry@oakgateco.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="h-100 bg-light rounded d-flex flex-column align-items-center p-2"
                style={{ backgroundColor: "#EDECEB !important" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <p
                    style={{ fontWeight: "bold", color: "#545554" }}
                    className="mb-0 me-2"
                  >
                    Follow Us
                  </p>
                  <span
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: "35px", height: "35px", marginLeft: "12px" }}
                  >
                    <i
                      style={{ color: "#dd1f57" }}
                      className="fa-solid fa-thumbs-up"
                    ></i>
                  </span>
                </div>
                <div className="text-center">
                  <a
                    href="https://www.facebook.com/Oakgatevacationrental"
                    style={{ color: "#545554" }}
                  >
                    <i className="fa-brands fa-facebook-f socmed-link"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://www.instagram.com/oakgatehomes/"
                    style={{ color: "#545554" }}
                  >
                    <i className="fa-brands fa-instagram socmed-link"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://twitter.com/OakgateHomes"
                    style={{ color: "#545554" }}
                  >
                    <i className="fa-brands fa-twitter socmed-link"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://www.yelp.com/biz/oakgate-vacation-rental-alhambra"
                    style={{ color: "#545554" }}
                  >
                    <i className="fa-brands fa-yelp socmed-link"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://www.google.com/maps/place/Oakgate+Vacation+Rental/@34.0792174,-118.1195597,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c5932d9e892d:0x2375d88578d9237c!8m2!3d34.0792174!4d-118.1195597"
                    style={{ color: "#545554" }}
                  >
                    <i className="fa-solid fa-link socmed-link"></i>
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="https://www.linkedin.com/company/oakgate/?viewAsMember=true"
                    style={{ color: "#545554" }}
                  >
                    <i className="fa-brands fa-linkedin-in socmed-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div
              className="bg-light rounded p-5"
              style={{ backgroundColor: "#EDECEB !important" }}
            >
              <form id="contactForm" className="row g-3 needs-validation" noValidate>
                <h1 className="mb-4" style={{ fontSize: "30px", color: "#545554" }}>
                  Get in touch
                </h1>
                <p className="mb-4">
                  Want to get in touch? We’d love to hear from you. Here’s how you
                  can reach us...
                </p>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name">Name</label>
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <div className="invalid-feedback">Please enter your email</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                    <label htmlFor="subject">Subject</label>
                    <div className="invalid-feedback">Please enter the subject</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "150px" }}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback">Please enter your message</div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    style={{ backgroundColor: "#dd1f57" }}
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div id="result"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}
const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            {/* Your contact form or content here */}
        </div>
    );
};

export default ContactUs;

