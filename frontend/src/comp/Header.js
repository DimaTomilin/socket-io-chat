import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <h1>DimChat</h1>
      <Link to={'/'}>
        <button className="btn logOut-btn">Log out</button>
      </Link>
    </div>
  );
}
