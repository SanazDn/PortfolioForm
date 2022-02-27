import react from "react";
import ReactDom from "react-dom";
import ButtonSubmit from "./ButtonSubmit";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={props.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <ButtonSubmit onClick={props.onConfirm}>Okey</ButtonSubmit>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <react.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </react.Fragment>
  );
};

export default ErrorModal;
