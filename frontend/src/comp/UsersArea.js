import React from 'react';
import User from './User';

export default function UsersArea({ users }) {
  return (
    <div className="users-list">
      {users.map((user) => {
        return <User user={user.name} key={user.id} />;
      })}
    </div>
  );
}
