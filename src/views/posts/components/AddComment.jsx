import React, { useState, useRef } from "react";
import classes from "./AddComment.module.css";
import Comment from "./Comment";
import commentIcon from "../../../img/Vector.png";

const AddComment = (props) => {
  const comment = useRef(null);
  const [commentIsValid, setCommentIsValid] = useState(false);
  const [comments, setComments] = useState([]);

  const enterKeyHandler = async (event) => {
    if (comments.length === 0) {
      setCommentIsValid(false);
    }

    if (event.keyCode === 13) {
      setComments((prevState) => [...prevState, comment.current.value]);
      setTimeout(() => {
        setCommentIsValid(true);
        comment.current.value = "";
      }, 0);
    }
  };

  return (
    <>
      <hr style={{ width: "95%" }} />
      {commentIsValid && <Comment body={comments} />}
      <div className={classes.addComment}>
        <img src={commentIcon} alt="" />
        <input
          type="text"
          ref={comment}
          placeholder="Add Comment..."
          onKeyDown={enterKeyHandler}
        />
      </div>
      <hr style={{ width: "100%" }} />
    </>
  );
};

export default AddComment;
