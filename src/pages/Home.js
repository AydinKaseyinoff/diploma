import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../App";

function Home() {
  const { products } = useContext(AppContext);

  // Генерируем случайное число в диапазоне от 0 до длины массива продуктов
  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * products.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  // Получаем случайные продукты по сгенерированным индексам
  const randomProducts = randomIndexes.map((index) => products[index]);

  return (
    <div className="Home">
      <h1>Welcome to our store!</h1>
      <h2>Featured Products:</h2>
      <div className="ProductList">
        {randomProducts.map((product) => (
          <div key={product.id} className="BoxList">
            <img src={product.picture} alt={product.name} />
            <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
            <div>
              <span>{product.price} ₽</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
