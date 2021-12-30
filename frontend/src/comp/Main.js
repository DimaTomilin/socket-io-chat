import React from 'react';
import Chat from './Chat';
import UsersArea from './UsersArea';
import NewMessage from './NewMessage';

export default function Main({ currentUsers, messages }) {
  return (
    <div className="main">
      <div className="upper-part">
        <Chat messages={messages} />
        <UsersArea currentUsers={currentUsers} />
      </div>
      <NewMessage />
    </div>
  );
}
