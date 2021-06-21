import React from 'react';
import { Formik, Field, Form } from "formik";
import FormColumn from './FormColumn';
import FormRow from './FormRow';
import { SIGN_UP_SCHEMA } from 'schemas/signup';
import style from "./SignUpForm.module.sass";

const initialValues = {
  userFirstName: "",
  userLastName: "",
  userNickname: "",
  userEmail: "",
  userPassword: ""
}

function SignUpForm() {
  return (
    <article className={style.signUpFormWrapper}>
      <h2>Create account</h2>
      <p>
        We always keep your name and email address private.
      </p>
      <Formik initialValues={initialValues} validationSchema={SIGN_UP_SCHEMA}>
        <Form className={style.signUpForm}>
          <FormRow>
            <FormColumn name="userFirstName"
                        type="text"
                        placeholder="First name"/>
            <FormColumn name="userLastName"
                        type="text"
                        placeholder="Last name"/>
          </FormRow>
          <FormRow>
            <FormColumn name="userNickname"
                        type="text"
                        placeholder="Nickname"/>
            <FormColumn name="userEmail"
                        type="text"
                        placeholder="Email"/>
          </FormRow>
          <FormRow>
            <FormColumn name="userPassword"
                        type="password"
                        placeholder="Password"/>
            <FormColumn name="userConfirmPassword"
                        type="password"
                        placeholder="Confirm password"/>
          </FormRow>
          <Field className={style.submitButton} type="submit" name="submitButton" value="create account"/>
        </Form>
      </Formik>
    </article>
  )
}


export default SignUpForm;