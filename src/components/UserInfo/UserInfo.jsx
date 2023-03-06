import React, { useContext } from "react";
import classes from "./UserInfo.module.css";
import userPhoto from "../../img/posts.png";

import { UserContext } from "../../context";

const UserInfo = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className={classes.userCont}>
      <div>
        <img src={userPhoto} alt="" />
      </div>
      <div className={classes.userNames}>
        <h4>{currentUser.name}</h4>
        <h5>@{currentUser.username}</h5>
      </div>
    </div>
  );
};

export default UserInfo;
