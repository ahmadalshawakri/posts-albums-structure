import React from "react";
import { useNavigate } from "react-router-dom";
import { StorageService } from "../../services";

const LogoutButton = () => {
  const navigateTo = useNavigate();
  const logoutHandler = () => {
    StorageService.setAuthKey(undefined);
    navigateTo("login");
  };
  return (
    <button onClick={logoutHandler}>
      <span></span> Log out
    </button>
  );
};

export default LogoutButton;
