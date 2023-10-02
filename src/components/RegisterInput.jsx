import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const { loadingBar } = useSelector((states) => states);
  const [name, onNameChange] = useInput("");
  const [id, onIdChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function onSubmitHandler(e) {
    e.preventDefault();

    register({ name, id, password });
  }

  return (
    <form className="register-input" onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />
      <input
        type="text"
        value={id}
        onChange={onIdChange}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button type="submit" disabled={loadingBar.default}>
        {loadingBar.default === 0 ? "Register" : "Register in process ..."}
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
