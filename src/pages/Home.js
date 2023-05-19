import React from "react";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to our store!</h1>
      <h1>Site under constuction</h1>
      <h1>
        Last updated <mark>19/05/23</mark>
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34649.10289465772!2d78.70511999296602!3d42.545190545721624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sky!2skg!4v1684312077766!5m2!1sky!2skg"
        width="100%"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google maps"
      ></iframe>
    </div>
  );
}

export default Home;
