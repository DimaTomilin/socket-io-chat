import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../../styles/signInStyles.scss';

export default function Authentication() {
  return (
    <div className="signIn-page">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <SignIn />
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
