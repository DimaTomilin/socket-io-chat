import React from 'react';
import Chat from './Chat';
import UsersArea from './UsersArea';
import NewMessage from './NewMessage';

export default function Main({
  messages,
  socket,
  setMessages,
  users,
  setPrivateReceiver,
  privateReceiver,
  currentUser,
}) {
  return (
    <div className="main">
      <div className="upper-part">
        <Chat messages={messages} />
        <UsersArea
          users={users}
          setPrivateReceiver={setPrivateReceiver}
          privateReceiver={privateReceiver}
        />
      </div>
      <NewMessage
        socket={socket}
        setMessages={setMessages}
        setPrivateReceiver={setPrivateReceiver}
        privateReceiver={privateReceiver}
        name={currentUser}
      />
    </div>
  );
}
