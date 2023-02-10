import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Img from "./pages/Img";
import Root from "./pages/Root";
import Chat from "./pages/Chat";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {path: "generator", element: <Img />},
      {path: "chat", element: <Chat />},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
