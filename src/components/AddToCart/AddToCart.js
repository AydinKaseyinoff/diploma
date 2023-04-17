import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty
    });
  }
  return (
    <div className="AddToCart">
        {cart[product.id] ? cart[product.id] : 0}
      <button onClick={onAddToCartClick}>Add To Cart</button>
    </div>
  );
}
