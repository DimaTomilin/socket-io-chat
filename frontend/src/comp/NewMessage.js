import React, { useRef } from 'react';

export default function NewMessage({
  socket,
  setMessages,
  privateReceiver,
  setPrivateReceiver,
}) {
  const MessageEle = useRef(null);
  console.log(privateReceiver);

  const sendMessage = () => {
    const content = MessageEle.current.value;
    MessageEle.current.value = '';
    if (privateReceiver) {
      setMessages((prev) => [
        ...prev,
        { name: 'dima', content, private: true },
      ]);
      socket.current.emit('privateMessage', {
        name: 'dima',
        content,
        toId: privateReceiver,
      });
    } else {
      setMessages((prev) => [...prev, { name: 'dima', content }]);
      socket.current.emit('message', { name: 'dima', content });
    }
  };

  const deletePrivateAndSend = () => {
    const content = MessageEle.current.value;
    MessageEle.current.value = '';
    setPrivateReceiver('');
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
      <button className="btn send-btn" onClick={sendMessage}>
        Send
      </button>
      {privateReceiver ? (
        <button className="btn send-btn" onClick={deletePrivateAndSend}>
          To All
        </button>
      ) : null}
    </div>
  );
}
