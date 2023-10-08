import React from "react";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.homeCont}>
      <div onClick={() => navigate("albums")}>
        <h1>Albums</h1>
      </div>
      <div onClick={() => navigate("posts")}>
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default Home;
