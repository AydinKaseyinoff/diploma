import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="title">CONTACT US</h1>
      <div className="container">
        <div className="container__elem">
          <a href="tel:+1234567890">
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
          <a href="whatsapp://send?phone=номер">
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
      </div>
    </div>
  );
};

export default Contact;
