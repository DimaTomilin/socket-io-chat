import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ socket }) {
  const navigate = useNavigate();

  const clickHandle = () => {
    localStorage.clear();
    socket.current.disconnect();
    navigate('/');
  };

  return (
    <div className="header">
      <h1>DimChat</h1>
      <button className="btn logOut-btn" onClick={clickHandle}>
        Log out
      </button>
    </div>
  );
}
