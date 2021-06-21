import React from 'react';
import {Link} from "react-router-dom"
import Logo from 'components/Logo';
import style from "./Home.module.sass";

function Home() {
  return (
    <>
    <header className={style.home}>
      <Logo/>
      <div className={style.headerRow}>
        <Link to="/login" className={style.rowItem}>Login</Link>
        <Link to="/signup" className={style.rowItem}>SignUp</Link>
      </div>
    </header>
    <main className={style.mainContent}></main>
    </>
  )
}

export default Home;
