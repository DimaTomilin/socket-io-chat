import React from 'react';
import User from './User';

export default function UsersArea({
  users,
  setPrivateReceiver,
  privateReceiver,
  currentUser,
}) {
  return (
    <div className="users-list">
      {users.map((user) => {
        return (
          <User
            user={user}
            setPrivateReceiver={setPrivateReceiver}
            privateReceiver={privateReceiver}
            key={user.id}
            currentUser={currentUser}
          />
        );
      })}
    </div>
  );
}
