import React from 'react';
import Chat from './Chat';
import UsersArea from './UsersArea';
import NewMessage from './NewMessage';

export default function Main({ messages, socket, setMessages }) {
  return (
    <div className="main">
      <div className="upper-part">
        <Chat messages={messages} />
        <UsersArea />
      </div>
      <NewMessage socket={socket} setMessages={setMessages} />
    </div>
  );
}
