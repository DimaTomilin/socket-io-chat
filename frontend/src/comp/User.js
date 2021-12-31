import React from 'react';

export default function User({ user, setPrivateReceiver }) {
  const clickHandle = () => {
    setPrivateReceiver(user.id);
  };
  return (
    <div className="user" onClick={clickHandle}>
      <span>🟢 </span>
      {user.name}
    </div>
  );
}
