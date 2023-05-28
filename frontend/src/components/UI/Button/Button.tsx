import React, { FC, ReactNode } from "react";
import "./Button.scss";

interface IProps {
  children?: ReactNode;
  props?: HTMLButtonElement;
  className?: string;
}

const Button: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
