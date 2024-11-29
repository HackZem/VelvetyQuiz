import { FC, ReactNode } from "react";
import "./Container.scss";
import classNames from "classnames";

interface IContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={classNames("Container", className)}>{children}</div>;
};

export default Container;
