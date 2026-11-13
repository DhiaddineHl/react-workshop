import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { getUserById } from "../data/users";

export const userDetailsLoader = ({ params }: LoaderFunctionArgs) => {
  const user = getUserById(params.id);
  if (!user) {
    // Thrown responses are caught by the closest route errorElement.
    throw new Response(`User ${params.id} not found`, { status: 404 });
  }
  return user;
};

const UserDetails = () => {
  const user = useLoaderData<typeof userDetailsLoader>();

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
