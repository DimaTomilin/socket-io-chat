import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ socket, currentUser }) {
  const navigate = useNavigate();

  const clickHandle = () => {
    localStorage.clear();
    socket.current.disconnect();
    navigate('/');
  };

  return (
    <div className="header">
      <h1>
        <i>DimChat</i>
      </h1>
      <p style={{ margin: '6px' }}>
        <i>Hi {currentUser}</i>
      </p>
      <button className="logOut-btn" onClick={clickHandle}>
        Log out
      </button>
    </div>
  );
}
