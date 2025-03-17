import { createBrowserRouter } from 'react-router-dom';
import Layout from '~/layout/Layout';
import HomePage from '~/pages/Home/HomePage';
import { ROUTE_PATH } from "./routes.constant";
import LoginPage from "~/pages/Login/LoginPage";
import AuthLayout from "~/layout/AuthLayout";
export const routers = createBrowserRouter([
  {
    id: "root",
    Component: Layout,
    children: [
      {
        id: "home",
        path: "/",
        Component: HomePage,
      },
    ],
  },
  {
    id: "auth",
    Component: AuthLayout, // Sử dụng AuthLayout cho login
    children: [
      {
        id: "login",
        path: ROUTE_PATH.LOGIN,
        Component: LoginPage,
      },
    ],
  },
]);
