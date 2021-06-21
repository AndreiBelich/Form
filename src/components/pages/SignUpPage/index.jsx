import React from 'react';
import cn from "classnames";
import {Link} from "react-router-dom";
import Logo from 'components/Logo';
import SignUpForm from 'components/forms/SignUpForm';
import style from "./SignUpPage.module.sass";

 function SignUp() {
  return (
    <div className={style.container}>
      <header className={cn(style.wrapper, style.signUpHeader)}>
        <Logo/>
        <Link className={style.loginLink} to="/login">Login</Link>
      </header>
      <SignUpForm/>
    </div>
  )
}

export default SignUp;