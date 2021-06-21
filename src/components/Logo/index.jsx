import React from 'react';
import {Link} from "react-router-dom";
import logo from "assets/images/logo.png";
import styles from "./Logo.module.sass";

function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt="logo"/>
    </Link>
  )
}

export default Logo;