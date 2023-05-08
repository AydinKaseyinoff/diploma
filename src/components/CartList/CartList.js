import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";
import BugNt from "../BugNt/BugNt";


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

  function clearCart() {
    setCart({});
  }

  const productIds = Object.keys(cart);

  const totalPrice = products
    .filter((product) => productIds.includes(product.id))
    .reduce((total, product) => total + cart[product.id] * product.price, 0);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <div>
          <img src={product.picture} alt={product.name} />
        </div>
        <div className="product-details">
          <Link to={`/products/` + product.slug}> {product.name}</Link>
          <div className="cart-inpt">
            <input
              type="number"
              value={cart[product.id]}
              min={1}
              max={10}
              onChange={(event) =>
                onQuantityChange(product, +event.target.value)
              }
            />
          </div>
          <span>{cart[product.id] * product.price} ₽</span>
          <div className="remove-btn">
            <button onClick={() => onItemRemove(product)}>Remove</button>
          </div>
        </div>
        
      </div>
    ));

  return (
    <div className="CartList">
      {output}
      {productIds.length > 0 && (
        <div className="cart-total">
          <div className="total-price">
            <span>Total Price:</span>
            <span>{totalPrice} ₽</span>
          </div>
          <div className="clear-btn">
            <button onClick={clearCart}>Clear All</button>
            <BugNt />
          </div>
        </div>
      )}
    </div>
  );
}
