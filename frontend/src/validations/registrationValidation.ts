import * as yup from "yup";

const registrationValidationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[A-Za-z0-9._]+$/, "Only English letters, numbers, . and _")
    .min(3, "Min username length is 3")
    .max(20, "Max username length is 20")
    .required("Username is required"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default registrationValidationSchema;
