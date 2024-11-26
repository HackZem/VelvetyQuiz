import { createPortal } from "react-dom";
import "./Modal.scss";
import { FC, ReactNode, useEffect, useMemo } from "react";
import { useAppDispatch } from "../../hooks";
import { hideModals, showModal } from "../../redux/slices/modals";
import { Provider } from "react-redux";
import store from "../../redux/store";

interface IProps {
  children?: ReactNode;
  className?: string;
}

const Modal: FC<IProps> = ({ children, className }) => {
  const dispatch = useAppDispatch();

  const modalsElement: any = useMemo(
    () => document.getElementById("modals"),
    []
  );

  useEffect(() => {
    const onPressKey = (e: any) => {
      if (e.keyCode === 27) {
        dispatch(hideModals());
      }
    };

    document.addEventListener("keyup", onPressKey);

    return () => {
      document.removeEventListener("keyup", onPressKey);
    };
  });

  return createPortal(
    <Provider store={store}>
      <div className="modal-wrapper">
        <div className={`modal ${className}`}>{children}</div>
        <div className="modal-overlay" onClick={() => dispatch(hideModals())} />
      </div>
    </Provider>,
    modalsElement
  );
};

export default Modal;
