import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Users from "./pages/Users.tsx";
import UserDetails from "./pages/UserDetails.tsx";
import ItemDetails from "./pages/ItemDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
          <Route path=":id/items/:itemId" element={<ItemDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

//exercice :
// add links to auth pages to redirect to login and register pages
// add to users list, for every user a list of items, and on the user details page,
// display the list of items for that user and make them clickable to redirect to
// a new page with the item details.
