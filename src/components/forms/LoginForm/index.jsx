import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LOGIN_SCHEMA } from 'schemas/login';
import style from "./Loginform.module.sass";

const initialValues = {
  userEmail: "",
  userPassword: "",
  remember: false,
  loginButton: "login"
}

function LoginForm() {
  return (
    <article className={style.loginFormWrapper}>
      <h2 className={style.loginFormCaption}>Login to your account</h2>
      <Formik initialValues={initialValues} validationSchema={LOGIN_SCHEMA}>
        <Form className={style.loginForm}>
          <Field type="text" name="userEmail" placeholder="Email address"/>
          <ErrorMessage className={style.error} component="span" name="userEmail"/>
          <Field type="password" name="userPassword" placeholder="Password" />
          <ErrorMessage className={style.error} component="span" name="userPassword"/>
          <div className={style.loginFormRow}>
            <label className={style.label}>
              <Field className={style.checkboxInput} type="checkbox" name="remember" />
              Remember me
            </label>
            <Link to="/forgot">Forgot password</Link>
          </div>
          <Field className={style.loginButton} type="submit" name="loginButton"/>
        </Form>
      </Formik>
    </article>
  )
}

export default LoginForm;
