import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './ChatWindow';
import InputField from './InputField';
import UserList from './UserList';

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulating incoming messages
    const interval = clearInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          user: 'User',
          text: `Message ${prevMessages.length + 1}`,
          timestamp: new Date().toISOString(),
        },
      ]);
    }, 10000);

    return () => setInterval(interval);
  }, []);

  const sendMessage = (text) => {
    // Simulating sending a message
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        user: 'You',
        text,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div className="app">
      <UserList users={users} />
      <ChatWindow messages={messages} />
      <InputField sendMessage={sendMessage} />
    </div>
  );
}

export default App;
