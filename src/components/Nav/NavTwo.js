import { NavLink } from "react-router-dom";
import "./Nav.css";
import wink from "../../assets/wink.png";
import Auth from "../Auth/Auth";
import Search from "../Search/Search";
import CartLinkBurger from "../CartLink/CartLink-Burger";

export default function NavTwo(props) {
  const handleNavigationClick = () => {
    if (props.onNavigationClick) {
      props.onNavigationClick();
    }
  };

  return (
    <div className="NavTwo">
      <nav className="topbar last-nav">
        <ul>
          <NavLink to="/" className="Logo-last">
            <img src={wink} alt="wink" />
            <h1>
              <span>ГАРДЕРОБ</span>24/7
            </h1>
          </NavLink>
          <li>
            <Auth />
          </li>
        </ul>
        <ul>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="NavItem" onClick={handleNavigationClick}>
            <NavLink to="/deliver">Deliver</NavLink>
          </li>
          <li>
            <Search />
          </li>
          <li>
            <CartLinkBurger onNavigationClick={handleNavigationClick} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
