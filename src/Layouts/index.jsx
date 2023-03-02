import React from "react";
import { useMatch } from "react-router-dom";
import { LoginRouter } from "../Routers/Login.router";
import { UserProvider } from "../context/user.context";
import LoginLayout from "./Login";
import MainLayout from "./Main";

const isLoginRoute = () => !!LoginRouter.find((route) => useMatch(route.path));

const Layouts = () => {
  const isLoginPage = isLoginRoute();

  return (
    <>
      {isLoginPage ? (
        <LoginLayout />
      ) : (
        <UserProvider>
          <MainLayout />
        </UserProvider>
      )}
    </>
  );
};

export default Layouts;
