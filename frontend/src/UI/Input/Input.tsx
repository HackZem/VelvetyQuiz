import React, { FC, InputHTMLAttributes } from "react";
import "./Input.scss";
import classNames from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string;
  className?: string;
  errorMessage?: string;
}

const Input: FC<IProps> = ({ children, className, errorMessage, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        placeholder={children}
        className={classNames("input", className)}
      />
      <span className="input_error">
        {errorMessage ? `• ${errorMessage}` : ""}
      </span>
    </>
  );
};

export default Input;
