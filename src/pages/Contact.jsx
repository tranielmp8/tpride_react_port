import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../stylesheets/contact.css";

const Contact = () => {
  
 
  return (
    <div className="contact-page ">
      <Header />

      <h1 className="section-heading contact-heading"> Contact</h1>
      <div className="form-container" data-aos="zoom-in">
        <img
          src="/form-img-purple.png"
          className="form-img"
          alt="contact-envelope"
        />
       
        <form
          name="contact"
          method="POST"
          className="contact-form"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" />
          <input name="email" type="email" placeholder="Email" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
