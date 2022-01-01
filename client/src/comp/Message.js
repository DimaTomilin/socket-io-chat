import React from 'react';

export default function Message({ message }) {
  const time = new Date();
  let style;
  if (message.private) {
    style = { backgroundColor: 'palegreen' };
  }

  return (
    <div className="message" style={style}>
      <div className="message-sender">{message.name}</div>
      <div className="message-content">{message.content}</div>
      <div className="message-time">{time.toLocaleString()}</div>
    </div>
  );
}
