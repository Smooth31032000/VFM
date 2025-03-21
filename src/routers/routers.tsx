import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from "~/layout/AuthLayout";
import Layout from "~/layout/Layout";
import HomePage from "~/pages/Home/HomePage";
import LoginPage from "~/pages/Login/LoginPage";
import ProductPage from "~/pages/Product/ProductPage";
import { ROUTE_PATH } from "./routes.constant";
import ProductDetail from "~/pages/Product/ProductDetail";
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
      {
        id: "product",
        path: ROUTE_PATH.PRODUCT,
        Component: ProductPage,
      },
      {
        id: "product-detail",
        path: ROUTE_PATH.PRODUCT_DETAIL,
        Component: ProductDetail,
      },
    ],
  },
  {
    id: "auth",
    Component: AuthLayout,
    children: [
      {
        id: "login",
        path: ROUTE_PATH.LOGIN,
        Component: LoginPage,
      },
    ],
  },
]);
