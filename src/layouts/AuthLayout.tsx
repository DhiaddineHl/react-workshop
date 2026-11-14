import { NavLink, Outlet } from "react-router";

const features = [
  "Explore users and their items",
  "Practice routing with loaders",
  "Build forms with React Hook Form",
];

const AuthLayout = () => {
  return (
    <div className="container-fluid p-0 flex-grow-1 d-flex">
      <div className="row g-0 flex-grow-1">
        {/* Brand panel: fills the whole left side, full height (hidden on small screens) */}
        <aside
          className="col-lg-6 d-none d-lg-flex flex-column justify-content-between text-white p-5 position-relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, var(--bs-primary) 0%, #6f42c1 60%, #3d1a78 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="position-absolute rounded-circle"
            style={{
              width: 420,
              height: 420,
              top: -140,
              right: -140,
              background: "rgba(255, 255, 255, 0.08)",
            }}
          />
          <div
            className="position-absolute rounded-circle"
            style={{
              width: 300,
              height: 300,
              bottom: -100,
              left: -100,
              background: "rgba(255, 255, 255, 0.06)",
            }}
          />

          <span className="badge bg-white text-primary align-self-start px-3 py-2 position-relative">
            React Workshop
          </span>

          <div className="position-relative" style={{ maxWidth: 440 }}>
            <h2 className="display-5 fw-bold mb-3">Welcome!</h2>
            <p className="lead opacity-75 mb-4">
              Sign in to your account or create a new one to get started.
            </p>
            <ul className="list-unstyled mb-0">
              {features.map((feature) => (
                <li key={feature} className="d-flex align-items-center mb-2">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-primary fw-bold me-3"
                    style={{ width: 24, height: 24, fontSize: 12 }}
                  >
                    ✓
                  </span>
                  <span className="opacity-75">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <small className="opacity-50 position-relative">
            &copy; {new Date().getFullYear()} React Workshop
          </small>
        </aside>

        {/* Auth content */}
        <section className="col-12 col-lg-6 d-flex align-items-center justify-content-center bg-body p-4 p-md-5">
          <div className="w-100" style={{ maxWidth: 420 }}>
            <ul className="nav nav-pills nav-fill bg-body-secondary rounded-3 p-1 mb-4">
              <li className="nav-item">
                <NavLink to="/auth/login" className="nav-link rounded-3">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/auth/register" className="nav-link rounded-3">
                  Register
                </NavLink>
              </li>
            </ul>

            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
