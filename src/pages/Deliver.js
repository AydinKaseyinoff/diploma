import React, { useState, useEffect, useRef } from "react";
import "./Deliver.css";

export default function Deliver() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const airplaneRef = useRef(null);

  useEffect(() => {
    const updateMouseCoords = (event) => {
      setMouseCoords({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", updateMouseCoords);
    return () => {
      document.removeEventListener("mousemove", updateMouseCoords);
    };
  }, []);

  useEffect(() => {
    const airplane = airplaneRef.current;
    const layer = airplane.parentNode;
    layer.style.transform = `translate3d(${(mouseCoords.x * 0.3) / 8}px, ${
      (mouseCoords.y * 0.4) / 10
    }px, 0px)`;
  }, [mouseCoords]);

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
      <div className="price-image">
        <div className="airplane">
          <img
            loading="eager"
            src="https://www.freepngimg.com/thumb/plane/16-plane-png-image.png"
            alt="Airplane for fast delivery"
            ref={airplaneRef}
          />
        </div>
      </div>
    </div>
  );
}
