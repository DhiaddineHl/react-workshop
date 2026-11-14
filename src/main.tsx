import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Users, { usersLoader } from "./pages/Users.tsx";
import UserDetails, { userDetailsLoader } from "./pages/UserDetails.tsx";
import ItemDetails, { itemDetailsLoader } from "./pages/ItemDetails.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import Shop from "./pages/Shop.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        path: "users",
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Users />, loader: usersLoader },
          { path: ":id", element: <UserDetails />, loader: userDetailsLoader },
          {
            path: ":id/items/:itemId",
            element: <ItemDetails />,
            loader: itemDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
