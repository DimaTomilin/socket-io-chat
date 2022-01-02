import React, { createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonElem from './ButtonElem';
import InputElem from './InputElem';
import { alert } from '../../helpers/alerts';

export default function SignIn() {
  const loginUser = createRef(null);
  const loginPass = createRef(null);
  const navigate = useNavigate();

  const login = async () => {
    const username = loginUser.current.value;
    const password = loginPass.current.value;

    if (!username || !password || password.length < 8) {
      return alert('User or Password is incorrect');
    }

    localStorage.setItem('user', username);
    navigate('/chat');
  };

  return (
    <div className="sign-in-htm">
      <InputElem
        name="Username"
        id="username_login"
        type="text"
        ref={loginUser}
      />
      <InputElem
        name="Password"
        id="password_login"
        type="password"
        ref={loginPass}
      />
      <ButtonElem name="Sign In" onClick={login} />
      <div className="hr"></div>
      <div className="foot-lnk">
        <a href="#forgot">Forgot Password?</a>
      </div>
    </div>
  );
}
