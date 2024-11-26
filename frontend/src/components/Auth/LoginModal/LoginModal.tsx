import Button from "../../../UI/Button/Button";
import Container from "../../../UI/Container/Container";
import Input from "../../../UI/Input/Input";
import Modal from "../../../UI/Modal/Modal";
import "./LoginModal.scss";
import { FormikConfig, useFormik } from "formik";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { hideModals, showModal } from "../../../redux/slices/modals";
import { TRootState } from "../../../redux/store";
import { fetchLogin } from "../../../redux/slices/auth";
import loginValidationSchema from "../../../validations/loginValidation";

interface IInitialValues {
  email: string;
  password: string;
  isRemember: boolean;
}

const LoginModal = () => {
  const dispatch = useAppDispatch();

  const initialState: FormikConfig<IInitialValues> = {
    initialValues: {
      email: "",
      password: "",
      isRemember: false,
    },
    validationSchema: loginValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: function (values) {
      dispatch(fetchLogin(values));
      dispatch(hideModals());
    },
  };

  const {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    errors,
    setFieldError,
  } = useFormik<IInitialValues>(initialState);

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { loginModal } = useAppSelector((state) => state.modals);

  return (
    <>
      {loginModal && (
        <Modal className="loginModal">
          <Container className="loginModal-container">
            <form onSubmit={handleSubmit} noValidate>
              <h2>Login</h2>
              <div className="loginModal-container-inputs">
                <div className="loginModal-container-inputs__item email">
                  <h3>E-mail</h3>
                  <Input
                    onChange={(e) => {
                      setFieldError(e.target.name, "");
                      handleChange(e);
                    }}
                    type="email"
                    name="email"
                    value={values.email}
                    errorMessage={errors.email || ""}
                  />
                </div>
                <div className="loginModal-container-inputs__item password">
                  <h3>Password</h3>
                  <Input
                    onChange={(e) => {
                      setFieldError(e.target.name, "");
                      handleChange(e);
                    }}
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    value={values.password}
                    errorMessage={errors.password || ""}
                  />
                  <img
                    src={
                      isShowPassword ? "./eye-active.svg" : "./eye-inactive.svg"
                    }
                    alt="hide"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                </div>
              </div>
              <Button type="submit">Login in</Button>
              <div className="loginModal-container-registration">
                <span>Don't have an account?</span>
                <a
                  className="loginModal-container-registration-link"
                  onClick={() => dispatch(showModal("registrationModal"))}
                >
                  Registration
                </a>
              </div>
            </form>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default LoginModal;
