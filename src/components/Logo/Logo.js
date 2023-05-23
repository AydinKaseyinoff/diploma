import "./Logo.css";
import { NavLink } from "react-router-dom";

export default function Logo(props) {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img width="80" height="80" src="https://img.icons8.com/dotty/80/000000/wink.png" alt="wink"/>
      </NavLink>
    </div>
  );
}
