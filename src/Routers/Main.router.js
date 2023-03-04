import { lazy, Suspense } from "react";

const Home = lazy(() => import("../views/Home/home"));
const Albums = lazy(() => import("../views/albums/albums"));
const Photos = lazy(() => import("../views/albums/Photos"));

export const MainRouters = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/albums",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Albums />
          </Suspense>
        ),
      },
      {
        path: "photos",
        element: (
          <Suspense>
            <Photos />
          </Suspense>
        ),
      },
    ],
  },
];
