import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/mainlayote/pages/Home";
import CategoryNews from "../components/mainlayote/pages/CategoryNews";

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
        loader: () => fetch("/public/news.json"),
        hydrateFallbackElement: (
          <span className="w-10 mx-auto  loading loading-infinity "></span>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Auth Layout</h1>,
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
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
