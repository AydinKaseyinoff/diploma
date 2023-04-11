import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать в наш интернет-магазин аксессуаров для телефонов!</h1>
      <p>Мы предлагаем широкий ассортимент аксессуаров для всех типов телефонов.</p>
      <p>У нас вы можете найти чехлы, защитные стекла, зарядные устройства, наушники, кабели и многое другое.</p>
      <Link to="/category">
        <button>Посмотреть все товары</button>
      </Link>
    </div>
  );
};

export default HomePage;
