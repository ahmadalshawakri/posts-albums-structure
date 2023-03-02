import React from "react";
import classes from "./Headers.module.css";

const Headers = (props) => {
  return (
    <div className={classes.headers}>
      <h1>{props.head}</h1>
      <h3>WHAT'S NEW TODAY</h3>
    </div>
  );
};

export default Headers;
