import { useContext, useState } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";
import chek from "../../assets/chek.gif";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [showNotification, setShowNotification] = useState(false);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty,
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
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
          <img src={chek} preload="true" alt="logo" className="chek" />
          <p>
            {product.name} <mark>successfully</mark> added to cart
          </p>
          <div className="total-notification">
            {total}
          </div>
        </div>
      )}
    </div>
  );
}
