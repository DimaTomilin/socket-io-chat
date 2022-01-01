import React, { useRef } from 'react';

export default function NewMessage({
  socket,
  setMessages,
  privateReceiver,
  setPrivateReceiver,
  name,
}) {
  const MessageEle = useRef(null);

  const sendMessage = () => {
    const content = MessageEle.current.value;
    MessageEle.current.value = '';
    if (privateReceiver) {
      setMessages((prev) => [...prev, { name, content, private: true }]);
      socket.current.emit('privateMessage', {
        name,
        content,
        toId: privateReceiver,
      });
    } else {
      setMessages((prev) => [...prev, { name, content }]);
      socket.current.emit('message', { name, content });
    }
  };

  const deletePrivateAndSend = () => {
    const content = MessageEle.current.value;
    MessageEle.current.value = '';
    setPrivateReceiver('');
    setMessages((prev) => [...prev, { name, content }]);
    socket.current.emit('message', { name, content });
  };

  return (
    <div className="new-message-area">
      <textarea
        ref={MessageEle}
        className="new-message-text"
        placeholder="New message"
      />
      <button className="send-btn" onClick={sendMessage}>
        Send
      </button>
      {privateReceiver ? (
        <button className="send-btn" onClick={deletePrivateAndSend}>
          To All
        </button>
      ) : null}
    </div>
  );
}
