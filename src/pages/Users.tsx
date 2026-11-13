import { Link } from "react-router";
import { usersList } from "../data/users";

const Users = () => {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Users</h1>
      <div className="list-group">
        {usersList.map((user) => (
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
