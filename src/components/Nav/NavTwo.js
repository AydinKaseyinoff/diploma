import { NavLink } from "react-router-dom";
import "./Nav.css";
import wink from "../../assets/wink.png";
import Auth from "../Auth/Auth";
import Search from "../Search/Search";
import CartLinkBurger from "../CartLink/CartLink-Burger";

export default function NavTwo(props) {
  return (
    <div className="NavTwo">
      <nav className="topbar last-nav">
        <ul>
          <NavLink to="/" className="Logo-last">
            <img src={wink} alt="wink" />
            <h1>
              <span>SMART</span>PHONE
            </h1>
          </NavLink>
          <li>
            <Auth />
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
            <Search />
          </li>
          <li>
            <CartLinkBurger />
          </li>
        </ul>
      </nav>
    </div>
  );
}
