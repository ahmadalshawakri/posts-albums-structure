import React, { lazy, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { StorageService } from "../services";
import { AuthenticationService } from "../services";

const Login = lazy(() => import("../views/login/Login"));

const LoginLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    if (isLoggedIn) {
      navigate("/albums/");
    } else {
      StorageService.setAuthKey(undefined);
    }
  }, [navigate]);
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
};

export default LoginLayout;
