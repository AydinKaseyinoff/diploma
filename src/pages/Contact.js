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
        src="
        https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4373.062224227841!2d-84.48273508374851!3d33.      979344457321346!3m2!1i1024!2i768!4f13. 
        1!3m3!1m2!1s0x88f513044f1de2e9%3A0xa3447b7f60af04cb!2zRSBQaWVkbW9udCBSZCwgR2VvcmdpYSwg0KHQqNCQ!5e0!3m2!1sru!2skg!4v1675547235177!5m2!1sru!2skg"
        title="Map of location"
        width="500"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="map"
      ></iframe>
    </div>
  );
};

export default Contact;
