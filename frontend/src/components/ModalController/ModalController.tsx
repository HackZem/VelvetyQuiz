import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ModalController: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalController;
