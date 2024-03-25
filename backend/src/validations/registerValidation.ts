import * as yup from "yup";

export interface IRegisterValidation {
  username: string;
  email: string;
  password: string;
}

const registerValidation: yup.ObjectSchema<IRegisterValidation> = yup.object({
  username: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
});

export default registerValidation;
