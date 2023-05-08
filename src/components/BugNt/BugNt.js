import React, { useState } from "react";
import Notification from "../Notification/Notification";

const BugNt = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Notification from ADMINISTRATION</button>
      {showNotification && (
        <Notification
          message="We are currently working on improving the website, so please excuse any bugs or issues you may encounter. Our team is actively addressing these issues and we appreciate your patience as we continue to make enhancements"
          duration={9000}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
};

export default BugNt;
