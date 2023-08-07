import React, { FC, ReactNode } from "react";
import "./Input.scss";

interface IProps {
  children?: string;
  props?: HTMLInputElement;
  className?: string;
}

const Input: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <input
      {...props}
      placeholder={children}
      className={`input ${className}`}
    ></input>
  );
};

export default Input;
