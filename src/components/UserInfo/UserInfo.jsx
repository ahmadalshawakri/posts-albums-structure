import React from "react";
import classes from "./UserInfo.module.css";
import userPhoto from "../../img/posts.png";

const UserInfo = (props) => {
  return (
    <div className={classes.userCont}>
      <div>
        <img src={userPhoto} alt="" />
      </div>
      <div className={classes.userNames}>
        <h4>{props.name}</h4>
        <h5>@{props.userName}</h5>
      </div>
    </div>
  );
};

export default UserInfo;
