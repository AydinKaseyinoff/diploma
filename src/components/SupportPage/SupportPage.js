import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleSubmit(event) {
    event.preventDefault();
    // выполнить необходимые действия для обработки запроса пользователя
  }

  return (
    <div>
      <h1>Свяжитесь с нами</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Имя"
          name="name"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        <Input
          label="Сообщение"
          name="message"
          as="textarea"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
}

export default SupportPage;
