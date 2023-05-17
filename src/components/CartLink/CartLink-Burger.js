import { useContext } from "react";
import "./CartLink-Burger.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function CartLinkBurger() {
    const { cart } = useContext(AppContext);

    const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

    return (
        <div className="CartLink-Burger">
            <NavLink to="/cart">
                <div>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg" alt="CART" />
                </div>
                {total}
            </NavLink>
        </div>
    )
}