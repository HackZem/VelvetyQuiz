import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
      "Only English letters, numbers and special symbols"
    )
    .min(8, "Min password length is 8")
    .max(20, "Max password length is 20")
    .required("Password is required"),
});

export default loginValidationSchema;
