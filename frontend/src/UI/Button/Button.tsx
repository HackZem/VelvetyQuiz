import React, { FC, ReactNode } from "react";
import "./Button.scss";
import classNames from "classnames";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  className?: string;
  props?: HTMLButtonElement;
}

const Button: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={classNames("button", className)}>
      {children}
    </button>
  );
};

export default Button;
