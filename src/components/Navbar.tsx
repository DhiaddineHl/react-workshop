import { useState } from "react";
// import { Cart } from "../App";
// import { useShop } from "../contexts/ShopContext";
import { useShopStore } from "../stores/ShopStore";
// import { Link, NavLink } from "react-router";

const appLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/users", label: "Users" },
  { to: "/shop", label: "Shop" },
];

const authLinks = [
  { to: "/auth/login", label: "Login" },
  { to: "/auth/register", label: "Register" },
];

// interface NavbarProps {
//   cart: Cart;
// }

const Navbar = () => {
  // Bootstrap's JS isn't loaded, so the mobile collapse is driven by state.
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const totalItems = useShopStore((s) => s.totalItems);
  // const { totalItems } = useShop();
  // const totalItems = cart.items.reduce(
  //   (total, item) => total + item.quantity,
  //   0,
  // );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
      <div className="container">
        <div className="navbar-brand fw-semibold" onClick={close}>
          React Workshop
        </div>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="main-navbar"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          id="main-navbar"
          className={`collapse navbar-collapse${open ? " show" : ""}`}
        >
          <ul className="navbar-nav me-auto">
            {appLinks.map((link) => (
              <li className="nav-item" key={link.to}>
                <div
                  // to={link.to}
                  // end={link.end}
                  className="nav-link"
                  onClick={close}
                >
                  {link.label}
                </div>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav ms-auto gap-md-2">
            {authLinks.map((link, i) => (
              <li className="nav-item" key={link.to}>
                <div
                  // to={link.to}
                  onClick={close}
                  // className={({ isActive }) =>
                  //   i === authLinks.length - 1
                  //     ? `btn btn-sm btn-primary my-1 my-md-0 px-3${isActive ? " active" : ""}`
                  //     : "nav-link"
                  // }
                >
                  {link.label}
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center ms-3">
            <div className="btn btn-sm btn-outline-light position-relative">
              Cart
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
