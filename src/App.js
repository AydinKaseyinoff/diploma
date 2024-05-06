import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";
import { createContext, useEffect, useState } from "react";
import {
  onAuthChange,
  onCategoriesLoad,
  ordersCollection,
  productsCollection,
} from "./firebase";
import { getDocs } from "firebase/firestore";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Deliver from "./pages/Deliver";
import Profile from "./components/Profile/Profile";


export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  // контекст для корзины
  cart: {},
  setCart: () => {},
  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);

    // выполнить только однажды
    getDocs(productsCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(ordersCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setOrders(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user.email === "kaseyinov@gmail.com";
      }

      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deliver" element={<Deliver />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;