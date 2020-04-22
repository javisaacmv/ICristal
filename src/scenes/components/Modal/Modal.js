import React from "react";
import "./Modal.css";

const Modal = ({ className, isActive, cancel, card, children }) => {
  const classes = ["modal"];
  if (className) classes.push(className);
  if (isActive) classes.push("is-active");
  return (
    <div className={classes.join(" ")}>
      <div className="modal-background" onClick={() => cancel(false)} />
      {!card && children}
      {card && <div className="modal-card">{children}</div>}
    </div>
  );
};

Modal.defaultProps = {
  cancel() {}
};

export default Modal;
