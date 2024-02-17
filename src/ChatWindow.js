import React from 'react';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <span className="message-sender">{message.user}: </span>
          <span className="message-text">{message.text}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
