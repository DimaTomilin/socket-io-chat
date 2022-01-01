import React from 'react';

export default function Message({ message }) {
  console.log(message);
  const time = new Date();

  return (
    <div className="message">
      <div className="message-sender">{message.name}</div>
      <div className="message-content">{message.content}</div>
      <div className="message-time">{time.toLocaleString()}</div>
    </div>
  );
}
