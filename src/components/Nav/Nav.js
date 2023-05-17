import { NavLink } from "react-router-dom";
import "./NavFirst.css";
import wink from "../../assets/wink.png";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Search from "../Search/Search";
import ModalWindow from "../ModalWindow/ModalWindow";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav className="first-nav">
        <ul>
          <NavLink to="/" className="Logo">
            <img src={wink} alt="wink" />
            <h1>
              <span>SMART</span>PHONE
            </h1>
          </NavLink>
          <li>
            <ModalWindow />
          </li>
        </ul>
        <ul>
          <li>
            <Search />
          </li>
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
          <li>
            <CartLink />
          </li>
          <li>
            <Auth />
          </li>
        </ul>
      </nav>
    </div>
  );
}
