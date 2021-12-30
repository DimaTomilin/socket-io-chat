import React, { useRef } from 'react';

export default function NewMessage({ socket, setMessages }) {
  const MessageEle = useRef(null);

  const clickHandler = () => {
    const content = MessageEle.current.value;
    MessageEle.current.value = '';
    setMessages((prev) => [...prev, { name: 'dima', content }]);
    socket.current.emit('message', { name: 'dima', content });
  };

  return (
    <div className="message-area">
      <textarea
        ref={MessageEle}
        className="message-text"
        placeholder="New message"
      />
      <button className="btn send-btn" onClick={clickHandler}>
        Send
      </button>
    </div>
  );
}
