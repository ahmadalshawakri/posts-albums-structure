import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { login } from "./service/login.service";
import ErrorMsg from "./components/ErrorMsg.component";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();

  const checkEmailHandler = async (event) => {
    event.preventDefault();

    try {
      const verifiedUser = await login(emailRef.current.value);

      if (!verifiedUser) {
        setError("Invalid Credentials!");
      } else {
        navigate("/albums/");
      }
    } catch (error) {
      setError("Something went wrong.");
    }
  };
  return (
    <div className={classes.loginCont}>
      <h2>Log in</h2>
      <form onSubmit={checkEmailHandler}>
        <input ref={emailRef} type="email" placeholder="jane@example.com" />
        <input type="password" placeholder="**********" />
        <button type="submit">LOG IN</button>
      </form>
      {error && <ErrorMsg message={error} />}
    </div>
  );
};

export default Login;
