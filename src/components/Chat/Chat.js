import React, { useEffect, useState } from "react";
import { onMessagesLoad, sendMessage } from "../../firebase";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Получение сообщений при загрузке компонента
    const unsubscribe = onMessagesLoad((loadedMessages) => {
      setMessages(loadedMessages);
    });

    // Отписка от получения сообщений при размонтировании компонента
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (newMessage.trim() !== "") {
      try {
        await sendMessage(newMessage);
        setNewMessage("");
      } catch (error) {
        console.log("Failed to send message:", error);
      }
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
