import React from 'react';

export default function User({
  user,
  setPrivateReceiver,
  privateReceiver,
  currentUser,
}) {
  let style;
  if (privateReceiver === user.id) {
    style = { backgroundColor: 'palegreen' };
  }
  const clickHandle = () => {
    if (user.name === currentUser) {
      return;
    } else {
      setPrivateReceiver(user.id);
    }
  };
  return (
    <div className="user" style={style} onClick={clickHandle}>
      <span>🟢 </span>
      {user.name}
    </div>
  );
}
