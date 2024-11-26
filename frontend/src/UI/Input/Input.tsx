import React, { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

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
        className={`input ${className}`}
      ></input>
      <span className="input_error">
        {errorMessage ? `• ${errorMessage}` : ""}
      </span>
    </>
  );
};

export default Input;
