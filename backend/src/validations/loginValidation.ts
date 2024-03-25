import * as yup from "yup";

export interface ILoginValidation {
  email: string;
  password: string;
}

const loginValidation: yup.ObjectSchema<ILoginValidation> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
});

export default loginValidation;
