import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p className="email">Email: example@email.com</p>
      <p className="phone">Phone: 555-555-5555</p>
      <p className="social">
        Check us out on:
        <a
          href="https://youtu.be/UKrA8hv8dvE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.icon-icons.com/icons2/836/PNG/512/Youtube_icon-icons.com_66802.png"
            alt="youtube"
          />
          YouTube
        </a>{" "}
        and
        <a
          href="https://www.tiktok.com/@example"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5934.870237824385!2d78.7072641295891!3d42.539559913316296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2skg!4v1684296929929!5m2!1sru!2skg"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="ICHKE_JERGEZ"
      ></iframe>
    </div>
  );
};

export default Contact;
