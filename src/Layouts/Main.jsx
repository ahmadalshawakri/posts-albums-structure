import React, { useEffect, useContext } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

import { AuthenticationService } from "../services";
import { UserContext } from "../context";
import { MainRouters } from "../Routers";

// const Wrapper = ({ Component }) => <Component />;

const MainLayout = () => {
  const mainRoutes = useRoutes(MainRouters);
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    if (!isLoggedIn) {
      navigate(
        `/login?returnUrl=${encodeURIComponent(
          window.location.href.replace(window.location.origin, "")
        )}`
      );
    } else setCurrentUser(AuthenticationService.getCurrentUser());
  }, [navigate, setCurrentUser]);

  return <>{mainRoutes}</>;
};

export default MainLayout;
