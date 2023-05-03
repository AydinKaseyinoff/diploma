import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <div>
          <img src={product.picture} alt={product.name} />
        </div>
        <Link to={"/product/" + product.slug}>{product.name}</Link>
        <div className="cart-inpt">
          <input
            type="number"
            value={cart[product.id]}
            min={1}
            max={10}
            onChange={(event) => onQuantityChange(product, +event.target.value)}
          />
        </div>
        <span>{cart[product.id] * product.price} ₽</span>
        <div className="remove-btn">
          <button onClick={() => onItemRemove(product)}>Remove</button>
        </div>
      </div>
    ));
  return <div className="CartList">{output}</div>;
}
