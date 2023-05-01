import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deliver from "./pages/Deliver";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { onAuthChange, productsCollection, ordersCollection, onCategoriesLoad } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  
  cart: {},
  setCart: () => {},

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([])
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {}
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart] )

  useEffect(() => {
    onCategoriesLoad(setCategories)

    getDocs(productsCollection)
      .then(({ docs }) => {
        console.log(docs);
        setProducts(
          docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }
      )
    getDocs(ordersCollection)
      .then(({ docs }) => {
        console.log(docs);
        setOrders(
          docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });

    
    onAuthChange(user => {
      if (user) {
        user.isAdmin = user.email === "kaseyinov@gmail.com"
      }
      setUser(user);
    });

  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders }}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;