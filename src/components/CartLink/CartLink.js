import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function CartLink() {
    const { cart } = useContext(AppContext);

    const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

    return (
        <div className="CartLink">
            <NavLink to="/cart">
                <div>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg" alt="CART" />
                </div>
                <div className="total-cart">
                  {total > 0 ? total : null}
                </div>
            </NavLink>
        </div>
    )
}