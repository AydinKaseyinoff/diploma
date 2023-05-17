import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return (
      <div className="Empty-Cart">
        <h1>Your cart is empty 😕</h1>
        <h3>
          It is likely that you haven't ordered product yet.
          <br />
          To order product, please go to the categories.
        </h3>
        <img src="https://github.com/AydinKaseyinoff/CoffeeShopFigma/blob/main/empty-cart.png?raw=true" alt="empty-cart" />
      </div>
    );
  }

  if (!user) {
    return "Please login to create an order";
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doс) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <label>
        Name: <input type="text" name="name" required />
      </label>
      <label>
        Phone: <input type="tel" name="phone" required />
      </label>
      <label>
        Address: <input type="text" name="address" required />
      </label>
      <button>Submit</button>
    </form>
  );
}
