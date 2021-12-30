import React from 'react';
import { Link } from 'react-router-dom';
import logout from '../helpers/logout';

export default function Header() {
  return (
    <div className="header">
      <h1>DimChat</h1>
      <Link to={'/'}>
        <button className="btn logOut-btn" onClick={() => logout()}>
          Log out
        </button>
      </Link>
    </div>
  );
}
