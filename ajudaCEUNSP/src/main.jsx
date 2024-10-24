import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Cadastrar from "./Pages/Register";
import Home from "./Pages/Home/index.jsx";
import NoticesDetail from "./Pages/NoticesDetail/index.jsx";
import SchedulePage from "./Pages/Schedule/index.jsx";
import TalkWithTeacher from "./Pages/TalkWithTeacher/index.jsx";
import { database } from "./utils/fireBaseApp.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "OpenWarn/:id",
        element: <NoticesDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastrar",
        element: <Cadastrar />,
      },
      {
        path: "horarios",
        element: <SchedulePage />,
      },
      {
        path: "talkToTeacher",
        element: <TalkWithTeacher database={database} />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
