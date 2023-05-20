import { useContext } from "react";
import "./CartLink-Burger.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function CartLinkBurger(props) {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  const handleNavigationClick = () => {
    if (props.onNavigationClick) {
      props.onNavigationClick();
    }
  };

  return (
    <div className="CartLink-Burger">
      <NavLink to="/cart" onClick={handleNavigationClick}>
        <div>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg"
            alt="CART"
          />
        </div>
        {total}
      </NavLink>
    </div>
  );
}
