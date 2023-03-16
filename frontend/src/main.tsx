import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import "./index.css";
import PopularMovies from "./routes/PopularMovies";
import Details from "./routes/Details";
import Search from "./routes/Search";
import TopRated from "./routes/TopRated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div></div>,
      },
      {
        path: "/popular-movies",
        element: <PopularMovies />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
