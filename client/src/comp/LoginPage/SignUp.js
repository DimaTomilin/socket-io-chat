import React from 'react';
import ButtonElem from './ButtonElem';
import InputElem from './InputElem';

export default function SignUp() {
  return (
    <div className="sign-up-htm">
      <InputElem name="Username" id="username_regist" type="text" />
      <InputElem name="Password" id="password_regist" type="password" />
      <InputElem
        name="Repeat Password"
        id="password_repeat-regist"
        type="password"
      />
      <InputElem name="Email Address" id="email_regist" type="text" />
      <ButtonElem name="Sign Up" />
      <div className="hr"></div>
      <div className="foot-lnk">
        <label for="tab-1">Already Member?</label>
      </div>
    </div>
  );
}
