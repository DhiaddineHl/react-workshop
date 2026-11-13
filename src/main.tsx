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

//exercice :
// redo everything from the routing/react-router-dom-declarative-solution branch,
// but in data mode (createBrowserRouter + route objects):
// - add links to auth pages to redirect to login and register pages
// - add to users list, for every user a list of items, and on the user details page,
//   display the list of items for that user and make them clickable to redirect to
//   a new page with the item details.
// - use loaders (+ useLoaderData) to provide the data to the user details and the
//   item details pages, like it's done for the users list.
