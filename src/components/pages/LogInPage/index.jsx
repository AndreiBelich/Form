import React from 'react';
import cn from "classnames";
import { Link } from "react-router-dom";
import Logo from 'components/Logo';
import LoginForm from 'components/forms/LoginForm';
import style from "./LogInPage.module.sass";

 function LogIn() {
  return (
    <div className={style.container}>
      <header className={cn(style.wrapper, style.loginHeader)}>
        <Logo/>
        <Link className={style.signUpLink} to="/signup">Signup</Link>
      </header>
      <div className={style.wrapper}>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LogIn;