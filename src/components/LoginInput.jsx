/* eslint-disable no-unneeded-ternary */
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [id, onIdChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function onSubmitHanlder(e) {
    e.preventDefault();

    login({id, password})
  }

  return (
    <form className="login-input" onSubmit={onSubmitHanlder}>
      <input type="text" value={id} onChange={onIdChange} placeholder="Username" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
