import React from 'react';

export default function Message({ message }) {
  // const time = new Date(message.time);

  return (
    <div className="message">
      {message.content}
      {/* {time.toLocaleString()} */}
    </div>
  );
}
