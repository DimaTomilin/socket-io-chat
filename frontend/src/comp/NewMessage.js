import React, { useRef } from 'react';
import axios from 'axios';

export default function NewMessage() {
  const MessageEle = useRef(null);

  const clickHandler = async () => {
    console.log('start');
    const content = MessageEle.current.value;
    MessageEle.current.value = '';
    try {
      await axios.post(
        'http://localhost:8080/api/message',
        {
          content,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
    } catch (error) {
      return alert(`Error ${error.response.status}. ${error.response.data}`);
    }
  };

  return (
    <div className="message-area">
      <textarea
        ref={MessageEle}
        className="message-text"
        placeholder="New message"
      />
      <button className="btn send-btn" onClick={() => clickHandler()}>
        Send
      </button>
    </div>
  );
}
