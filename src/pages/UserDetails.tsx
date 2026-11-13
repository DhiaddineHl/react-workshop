import { Link, useParams } from "react-router";
import { getUserById } from "../data/users";

const UserDetails = () => {
  const params = useParams();
  const user = getUserById(params.id);

  if (!user) {
    return (
      <div className="container py-4">
        <div className="alert alert-warning">User {params.id} not found.</div>
        <Link to="/users" className="btn btn-secondary">
          Back to users
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <Link to="/users" className="btn btn-link px-0 mb-3">
        &larr; Back to users
      </Link>
      <h1>User Details</h1>
      <p className="text-muted">This is the user {user.name} details page.</p>

      <h4 className="mt-4">Items</h4>
      <div className="list-group">
        {user.items.map((item) => (
          <Link
            key={item.id}
            to={`/users/${user.id}/items/${item.id}`}
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            {item.name}
            <span className="text-muted">${item.price}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
