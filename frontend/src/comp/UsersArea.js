import React from 'react';
import User from './User';

export default function UsersArea({ currentUsers }) {
  return (
    <div className="users-list">
      {currentUsers.map((user) => {
        return <User user={user} key={user.username} />;
      })}
    </div>
  );
}
