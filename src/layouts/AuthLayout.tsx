import { NavLink, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="container py-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-3">Auth layout</h2>

      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <NavLink to="/auth/login" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/auth/register" className="nav-link">
            Register
          </NavLink>
        </li>
      </ul>

      <div className="card card-body">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
