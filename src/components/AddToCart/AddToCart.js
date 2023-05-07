import { useContext, useState } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [showNotification, setShowNotification] = useState(false);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick}>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg" alt="CART" />
        Add To Cart
      </button>
      {showNotification && (
        <div className="Notification">
          <img src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" alt="CHECKMARK" />
          <p>Product <mark>successfully</mark> added to cart</p>
        </div>
      )}
    </div>
  );
}

