import React from "react";
import classes from "./CommentContent.module.css";
import commenterPhoto from "../../../img/comments.png";

const CommentContent = ({ commentData }) => {
  return (
    <React.Fragment>
      <div className={classes.userCont}>
        <div>
          <img src={commenterPhoto} alt="" />
        </div>
        <div className={classes.userName}>
          <h4>{commentData.name}</h4>
        </div>
      </div>
      <div className={classes.commentsBody}>
        <p>{commentData.body}</p>
      </div>
    </React.Fragment>
  );
};

export default CommentContent;
