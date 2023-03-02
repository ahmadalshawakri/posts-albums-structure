import { lazy } from "react";

const Albums = lazy(() => import("../views/albums/albums.router"));

export const MainRouters = [
  {
    path: "/albums/*",
    name: "Albums",
    component: Albums,
  },
];
