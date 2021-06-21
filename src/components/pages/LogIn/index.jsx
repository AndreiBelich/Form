import React from 'react';
import Logo from 'components/Logo';
import style from "./LogIn.module.sass";

 function LogIn() {
  return (
    <div className={style.container}>
      <header className={style.wrapper}>
        <Logo/>
        <div>SignUp</div>
      </header>
      <div className={style.wrapper}>
      </div>
    </div>
  )
}

export default LogIn;