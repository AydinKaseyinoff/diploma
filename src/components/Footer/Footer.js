import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Аксессуары для Телефона</p>
    </footer>
  );
}

export default Footer;
