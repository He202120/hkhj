import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import CompoCreator from "./pages/CompoCreator";
import Admin from "./pages/Admin";
import Gestionnaire from "./pages/Gestionnaire";
import Agenda from "./pages/Agenda";
import Gestionnaire_inscription from "./pages/Gestionnaire_inscription";
import Candidat from "./pages/Candidat";
import Dashboard from "./pages/account/Dashboard";
import Profile from "./pages/account/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/auth/register",
    element: <Register />
  },
  {
    path: "/auth/login",
    element: <Login />
  },
  {
    path: "/account/dashboard",
    element: <Dashboard />
  },
  {
    path: "/account/profile",
    element: <Profile />
  },
  {
    path: "/coach/composition",
    element: <CompoCreator />
  },
  {
    path: "/admin/overview",
    element: <Admin />
  },
  {
    path: "/admin/gestion",
    element: <Gestionnaire />
  },
  {
    path: "/admin/gestion-inscriptions",
    element: <Gestionnaire_inscription />
  },
  {
    path: "/agenda",
    element: <Agenda />
  },
  {
    path: "/auth/candidat",
    element: <Candidat />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);






























