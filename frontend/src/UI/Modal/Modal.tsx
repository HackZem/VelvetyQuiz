import { createPortal } from "react-dom";
import "./Modal.scss";
import { FC, ReactNode, useMemo } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
}

const Modal: FC<IProps> = ({ children, className }) => {
  const modalsElement: any = useMemo(
    () => document.getElementById("modals"),
    []
  );

  return createPortal(
    <div className="modal">
      <div className={`modal-wrapper ${className}`}>{children}</div>
    </div>,
    modalsElement
  );
};

export default Modal;
