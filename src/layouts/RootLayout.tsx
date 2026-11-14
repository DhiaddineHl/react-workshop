import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Shop from "../pages/Shop";

const RootLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 d-flex flex-column">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
