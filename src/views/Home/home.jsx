import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("albums")}>
        <h1>Albums</h1>
      </div>
      <div>
        <h1>Posts</h1>
      </div>
    </>
  );
};

export default Home;
