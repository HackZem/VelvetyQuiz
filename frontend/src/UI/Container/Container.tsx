import { FC, ReactNode } from "react";
import "./Container.scss";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={`${className} Container`}>{children}</div>;
};

export default Container;
