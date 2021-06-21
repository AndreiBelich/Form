import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object({
  userEmail: Yup.string().email().required("Поле обязательно для заполнения"),
  userPassword: Yup.string()
                   .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                   "Пароль ненадежный, придумайте более сложный пароль!")
                   .matches(/^.{8,64}$/, "Длина пароля должна быть от 8 до 64 символов!")
                   .required("Поле обязательно для заполнения")
});