import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/mainlayote/pages/Home";
import CategoryNews from "../components/mainlayote/pages/CategoryNews";
import Login from "../components/mainlayote/pages/Login";
import Register from "../components/mainlayote/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../components/mainlayote/pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/mainlayote/pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: (
          <Loading/>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: (
      <Loading/>
    ),
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
