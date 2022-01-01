import React from 'react';

export default function User({ user, setPrivateReceiver, privateReceiver }) {
  let style;
  if (privateReceiver === user.id) {
    style = { backgroundColor: 'green' };
  }
  const clickHandle = () => {
    setPrivateReceiver(user.id);
  };
  return (
    <div className="user" style={style} onClick={clickHandle}>
      <span>🟢 </span>
      {user.name}
    </div>
  );
}
