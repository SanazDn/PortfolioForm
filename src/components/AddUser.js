import React, { useState } from "react";
import classes from "./AddUser.module.css";
import ButtonSubmit from "./UI/ButtonSubmit";
import ErrorModal from "./UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [error, setError] = useState(null);
  const errorBlur = {
    title: "Invalid input",
    message: "Please fill all the fields.",
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredEmail, enteredMessage);

    if (
      enteredUsername.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length === 0 
      
    ) {
      setError({
        title: "Invalid input",
        message: "Please fill all the fields correctly!",
      });

      return;
    }

    const userData = {
      name: enteredUsername,
      email: enteredEmail,
      message: enteredMessage,
    };

    props.onUser(userData);

    setEnteredUsername("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const usernameBlur = (event) => {
    if (enteredUsername.trim().length === 0) {
      setError(errorBlur);
      return;
    }
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlur = (event) => {
    if (
      enteredEmail.trim().length === 0 
    ) {
      setError(errorBlur);
      return;
    }
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const messageBlur = (event) => {
    if (enteredMessage.trim().length === 0) {
      setError(errorBlur);
      return;
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={classes.form}>
        <h3>Contact</h3>
        <form onSubmit={addUserHandler}>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            placeholder="Name"
            onChange={usernameChangeHandler}
            onBlur={usernameBlur}
          />
          <br />

          <input
            id="email"
            type="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlur}
          />
          <br />
          <textarea
            name="message"
            placeholder="Message"
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlur}
          />
          <div>
            <ButtonSubmit type="submit" className={classes.buttonTwo}>
              Submit
            </ButtonSubmit>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(AddUser);
