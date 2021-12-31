import React from 'react';
import User from './User';

export default function UsersArea({ users, setPrivateReceiver }) {
  return (
    <div className="users-list">
      {users.map((user) => {
        return (
          <User
            user={user}
            setPrivateReceiver={setPrivateReceiver}
            key={user.id}
          />
        );
      })}
    </div>
  );
}
