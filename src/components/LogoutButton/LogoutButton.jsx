import React from "react";
import { useNavigate } from "react-router-dom";
import { StorageService } from "../../services";
import styles from "./LogoutButton.module.css"

const LogoutButton = () => {
  const navigateTo = useNavigate();
  const logoutHandler = () => {
    StorageService.setAuthKey(undefined);
    navigateTo("login");
  };
  return (
    <button onClick={logoutHandler} className={styles.logoutBtn}>
      <span></span> Log out
    </button>
  );
};

export default LogoutButton;
