import * as Yup from "yup";


const REQUIRED_MESSAGE = "Поле обязательно для заполнения!";
const NAME_SCHEMA = Yup.string()
                       .matches(/^[A-Z][a-z]{2,15}$/, "поле должно содержать от 3 до 16 символов!")
                       .required(REQUIRED_MESSAGE);


 export const SIGN_UP_SCHEMA = Yup.object({
  userFirstName: NAME_SCHEMA,
  userLastName: NAME_SCHEMA,
  userNickname: NAME_SCHEMA,
  userEmail: Yup.string().email().required(REQUIRED_MESSAGE),
  userPassword:  Yup.string()
                    .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                    "Пароль ненадежный, придумайте более сложный пароль!")
                    .matches(/^.{8,64}$/, "Длина пароля должна быть от 8 до 64 символов!")
                    .required(REQUIRED_MESSAGE)

});