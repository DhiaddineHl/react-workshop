import { Link, useLoaderData } from "react-router";
import { usersList } from "../data/users";

// In data mode, a loader runs before the route renders and provides its data.
export const usersLoader = () => {
  return usersList;
};

const Users = () => {
  const users = useLoaderData<typeof usersLoader>();

  return (
    <div className="container py-4">
      <h1 className="mb-4">Users</h1>
      <div className="list-group">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            {user.name}
            <span className="badge text-bg-primary rounded-pill">
              {user.items.length} items
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
