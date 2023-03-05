import React from "react";
import { useMatch } from "react-router-dom";
import { LoginRouter } from "../Routers/Login.router";
import { UserProvider } from "../context/user.context";

import LoginLayout from "./Login";
import MainLayout from "./Main";
import LogoutButton from "../components/LogoutButton/LogoutButton";

const isLoginRoute = () => !!LoginRouter.find((route) => useMatch(route.path));

const Layouts = () => {
  const isLoginPage = isLoginRoute();

  return (
    <>
      {isLoginPage ? (
        <LoginLayout />
      ) : (
        <UserProvider>
          <LogoutButton />
          <MainLayout />
        </UserProvider>
      )}
    </>
  );
};

export default Layouts;
