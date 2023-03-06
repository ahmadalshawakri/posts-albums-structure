import React, { useContext } from "react";
import { UserContext } from "../../../../context/user.context";
import classes from "./Comment.module.css";
import commenterPhoto from "../../../../img/comments.png";

const Comment = (props) => {
  const loggedUser = useContext(UserContext);
  return (
    <>
      {props.body.map((comment) => (
        <div key={comment} className={classes.commentCont}>
          <div>
            <img src={commenterPhoto} alt="" />
          </div>
          <div className={classes.commenter}>
            <h4>{loggedUser.name}</h4>
            <p>{comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
