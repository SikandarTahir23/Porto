"use client"
import type { NextPage } from "next";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const d = document.getElementById("contactFormSubmit") as HTMLButtonElement;
    d.innerHTML = "Sending...";
    d.classList.add("btn-disabled");
    d.classList.add("loading");

    const formData = new FormData(e.currentTarget); // Using e.currentTarget

    formData.append("access_key", "0f5bc6ae-c55f-4219-85cf-bd04a62dac5b"); // Replace with your actual access key

    const send = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const res = await send.json();

    // Notify user of the result
    if (res.success) {
      toast.success("Message sent successfully!");
      
    } else {
      toast.error("Something went wrong!");
    }

    d.innerHTML = "Send Message";
    d.classList.remove("btn-disabled");
    d.classList.remove("loading");
    setLoading(false);
  };

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>Karachi, Pakistan</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p>+92316-2063441</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>sikandar.tahir.04@gmail.com</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          <div className="row">
            <form className="contact-form padd-15" onSubmit={formSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name*"
                      name="from"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                      name="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject*"
                      name="subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message*"
                      name="msg"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button 
                    type="submit" 
                    className={`btn ${loading ? 'btn-disabled' : ''}`} 
                    id="contactFormSubmit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
