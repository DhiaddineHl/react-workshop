import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Users, { usersLoader } from "./pages/Users.tsx";
import UserDetails from "./pages/UserDetails.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/users",
    children: [
      { index: true, element: <Users />, loader: usersLoader },
      { path: ":id", element: <UserDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
