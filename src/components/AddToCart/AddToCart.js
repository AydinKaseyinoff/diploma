import { useContext, useState } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
import chek from "../../assets/chek.gif";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [showNotification, setShowNotification] = useState(false);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty,
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500);
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg"
          alt="CART"
        />
        Add To Cart
      </button>
      {showNotification && (
        <div className="Notification">
          <img src={chek} preload alt="logo" className="chek" />
          <p>
            Product <mark>successfully</mark> added to cart
          </p>
        </div>
      )}
    </div>
  );
}
