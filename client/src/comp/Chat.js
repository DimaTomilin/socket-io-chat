import React from 'react';
import Message from './Message';

export default function Chat({ messages }) {
  return (
    <div className="chat-area">
      {messages.map((message, index) => {
        return <Message message={message} key={index} />;
      })}
    </div>
  );
}
