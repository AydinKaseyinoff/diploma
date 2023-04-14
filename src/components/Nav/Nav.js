import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav className="topbar">
        <ul>
          <NavLink to="/">
            <img
              src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg"
              alt="logo"
              className="logo"
            />
          </NavLink>
        </ul>
        <ul>
          <li className="NavItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/deliver">Deliver</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
