import "./Footer.css";

import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Контакты</h4>
            <p>Наш адрес: ул. Примерная, д. 1, г. Примерный</p>
            <p>Телефон: +7 (123) 456-78-90</p>
            <p>Email: example@example.com</p>
          </div>
          <div className="col-md-4">
            <h4>Ссылки</h4>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>О нас</h4>
            <p>Мы являемся одним из лучших интернет-магазинов аксессуаров для телефонов в России.</p>
            <p>Мы предлагаем широкий ассортимент качественных и стильных аксессуаров для телефонов по доступным ценам.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;