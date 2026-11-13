import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} - ${error.data}`
    : "Something went wrong.";

  return (
    <div className="container py-4">
      <div className="alert alert-warning">{message}</div>
      <Link to="/users" className="btn btn-secondary">
        Back to users
      </Link>
    </div>
  );
};

export default ErrorPage;
