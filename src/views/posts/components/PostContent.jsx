import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PostContent.module.css";

const PostContent = ({ content }) => {
  const navigateTo = useNavigate();

  const postClickHandler = () => {
    navigateTo(`comments?postId=${content.id}`);
  };

  return (
    <div className={classes.postBody} onClick={postClickHandler}>
      <p>{content.body}</p>
    </div>
  );
};

export default PostContent;
