import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import "./Home.css";
import Slider from "../components/Slider/Slider";
import AddToCart from "../components/AddToCart/AddToCart";

function Home() {
  const { products } = useContext(AppContext);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const getRandomProducts = () => {
      if (products.length === 0) {
        setRandomProducts([]);
        return;
      }

      const randomIndexes = [];
      while (randomIndexes.length < 6) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      const selectedProducts = randomIndexes.map((index) => products[index]);
      setRandomProducts(selectedProducts);
    };

    getRandomProducts();
  }, [products]);

  return (
    <div className="Home">
      <h1>Welcome to our store!</h1>
      <Slider />
      <h2>Recommended Products:</h2>
      {randomProducts.length > 0 && (
        <div className="RandomProducts">
          {randomProducts.map((product) => (
            <div key={product.id} className="BoxList">
              <img className="ProductImage" loading="eager" src={product.picture} preload={true} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} ₽</p>
              <AddToCart product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
