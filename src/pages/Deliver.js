import React from "react";
import "./Deliver.css";

export default function Deliver() {
  return (
    <div className="Deliver">
      <div className="deliver-content">
        <h2>Fast Delivery at Affordable Prices</h2>
        <p>
          We understand that getting your hands on the latest tech is important
          to you. That's why we offer fast and reliable delivery options at
          prices that won't break the bank. Whether you're in a hurry or looking
          to save, we've got you covered.
        </p>
      </div>
      <div className="airplane">
        <img
          loading="eager"
          src="https://www.freepngimg.com/thumb/plane/16-plane-png-image.png"
          alt="Airplane for fast delivery"
        />
      </div>
    </div>
  );
}
