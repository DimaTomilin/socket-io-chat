import React, { createRef } from 'react';
import ButtonElem from './ButtonElem';
import InputElem from './InputElem';

export default function SignUp() {
  const RegistUser = createRef(null);
  const RepeatPass = createRef(null);
  const RegistPass = createRef(null);
  const RegistEmail = createRef(null);

  const registration = async () => {
    const username = RegistUser.current.value;
    const password = RegistPass.current.value;
    const repeatPassword = RepeatPass.current.value;
    const email = RegistEmail.current.value;

    console.log({ username, password, repeatPassword, email });
  };

  return (
    <div className="sign-up-htm">
      <InputElem
        name="Username"
        id="username_regist"
        type="text"
        ref={RegistUser}
      />
      <InputElem
        name="Password"
        id="password_regist"
        type="password"
        ref={RegistPass}
      />
      <InputElem
        name="Repeat Password"
        id="password_repeat-regist"
        type="password"
        ref={RepeatPass}
      />
      <InputElem
        name="Email Address"
        id="email_regist"
        type="text"
        ref={RegistEmail}
      />
      <ButtonElem name="Sign Up" onClick={registration} />
      <div className="hr"></div>
      <div className="foot-lnk">
        <label for="tab-1">Already Member?</label>
      </div>
    </div>
  );
}
