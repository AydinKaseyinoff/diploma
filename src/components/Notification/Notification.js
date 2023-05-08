import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`notification ${isVisible ? "show" : ""}`}>
      <h5>DEVELOPER</h5>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
