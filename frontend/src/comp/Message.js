import React from 'react';
import Icon from './Icon';

export default function Message({ message }) {
  const time = new Date(message.time);

  return (
    <div className="message">
      <Icon url={message.username} />
      {message.content} {time.toLocaleString()}
    </div>
  );
}
