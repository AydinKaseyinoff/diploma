import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="title">CONTACT US</h1>
      <div className="container">
        <div className="container__elem">
          <a href="tel:+996708338944">
            <div className="elem__block">
              <img
                className="hover-img"
                src="https://i.postimg.cc/XvK00tKD/call.png"
                width="50%"
                alt="Call"
              />
            </div>
          </a>
          <h2 className="text">CALL US</h2>
          <p className="text">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="container__elem">
          <a href="whatsapp://send?phone=+996708338944">
            <div className="elem__block">
              <img
                className="hover-img"
                src="https://i.postimg.cc/Fzzt3RM2/write.png"
                width="50%"
                alt="Write"
              />
            </div>
          </a>
          <h2 className="text">WRITE US</h2>
          <p className="text">Lorem ipsum dolor sit amet.</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112045.69048876352!2d78.63186148223828!3d42.543307413294094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3887ab8401dd44f9%3A0xe131b85045f775dc!2z0JjRh9C60LUt0JbQtdGA0LPQtdC3LCDQkNC6LdCh0YPRgyDRgNCw0LnQvtC90YM!5e0!3m2!1sky!2skg!4v1684999224406!5m2!1sky!2skg"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="maps"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
