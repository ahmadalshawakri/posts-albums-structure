import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const navigateTo = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.contentText}>
        <h1>404</h1>
        <h3>Page not found</h3>
        <h4>
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </h4>
      </div>
      <button onClick={() => navigateTo("/")}>Back to home</button>
    </div>
  );
};

export default NotFound;
