import Button from "../../../UI/Button/Button";
import Container from "../../../UI/Container/Container";
import Input from "../../../UI/Input/Input";
import Modal from "../../../UI/Modal/Modal";
import "./RegistrationModal.scss";
import { FormikConfig, useFormik } from "formik";
import { useState } from "react";
import { TRootState } from "../../../redux/store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { hideModals, showModal } from "../../../redux/slices/modals";
import { fetchRegister } from "../../../redux/slices/auth";
import registrationValidationSchema from "../../../validations/registrationValidation";

interface IInitialValues {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  isRemember: boolean;
}

const RegistrationModal = () => {
  const dispatch = useAppDispatch();

  const initialState: FormikConfig<IInitialValues> = {
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      isRemember: false,
    },
    validationSchema: registrationValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: function (values) {
      dispatch(fetchRegister(values));
      dispatch(hideModals());
    },
  };

  const { registrationModal } = useAppSelector(
    (state: TRootState) => state.modals
  );

  const { handleSubmit, handleChange, values, errors, setFieldError } =
    useFormik<IInitialValues>(initialState);

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <>
      {registrationModal && (
        <Modal className="registrationModal">
          <Container className="registrationModal-container">
            <form onSubmit={handleSubmit} noValidate>
              <h2>Registration</h2>
              <div className="registrationModal-container-inputs">
                <div className="registrationModal-container-inputs__item nickname">
                  <h3>Username</h3>
                  <Input
                    onChange={(e) => {
                      setFieldError(e.target.name, "");
                      handleChange(e);
                    }}
                    type="text"
                    name="username"
                    value={values.username}
                    errorMessage={errors.username || ""}
                  />
                </div>
                <div className="registrationModal-container-inputs__item email">
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
                <div className="registrationModal-container-inputs__item password">
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
                <div className="registrationModal-container-inputs__item confirmPassword">
                  <h3>Confirm password</h3>
                  <Input
                    onChange={(e) => {
                      setFieldError(e.target.name, "");
                      handleChange(e);
                    }}
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    errorMessage={errors.confirmPassword || ""}
                  />
                </div>
              </div>
              <Button type="submit">Register</Button>
              <div className="registrationModal-container-registration">
                <span>Don't have an account?</span>
                <a
                  className="registrationModal-container-registration-link"
                  onClick={() => dispatch(showModal("loginModal"))}
                >
                  Login
                </a>
              </div>
            </form>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default RegistrationModal;
