import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./SupportPage.css";

function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    // выполнить необходимые действия для обработки запроса пользователя
  }

  return (
    <div>
      <h1>Свяжитесь с нами</h1>
      <form className="Support" onSubmit={handleSubmit}>
        <Input
          label="Имя"
          name="name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <textarea
          rows={4} // Количество видимых строк
          cols={50} // Количество видимых символов в строке// Значение текстовой области
          placeholder="Введите текст" // Плейсхолдер (подсказка для ввода)
          disabled={false} // Отключение текстовой области
        />

        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
}

export default SupportPage;
