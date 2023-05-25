import "./About.css";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <NavLink to="/" className="Logo">
        <h1>
          <span>SMART</span>PHONE
        </h1>
      </NavLink>
    </div>
  );
}
