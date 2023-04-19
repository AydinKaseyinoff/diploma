import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deliver from "./pages/Deliver";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import { categoryCollection, onAuthChange, productsCollection } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";

export const AppContext = createContext({
  categories: [],
  products: [],
  
  cart: {},
  setCart: () => {},

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {}
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart] )

  useEffect(() => {
    getDocs(categoryCollection)
      .then(({ docs }) => {
        console.log(docs);
        setCategories(
          docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });

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
    
    onAuthChange(user => {
      setUser(user);
    });

  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user }}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
