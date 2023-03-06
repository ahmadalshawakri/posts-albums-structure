import { lazy, Suspense } from "react";

const Home = lazy(() => import("../views/Home/home"));
const Albums = lazy(() => import("../views/albums/albums"));
const Photos = lazy(() => import("../views/albums/Photos"));
const Posts = lazy(() => import("../views/posts/Posts"));
const PostComments = lazy(() => import("../views/posts/PostComments"));
const NotFound = lazy(() => import("../views/NotFound/NotFound"));

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
        index: true,
        element: (
          <Suspense>
            <Photos />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/posts",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Posts />
          </Suspense>
        ),
      },
      {
        path: "comments",
        element: (
          <Suspense>
            <PostComments />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    index: true,
  },
];
