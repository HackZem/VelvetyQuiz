import React, { FC, ReactNode } from "react";
import "./Button.scss";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  className?: string;
  props?: HTMLButtonElement;
}

const Button: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
