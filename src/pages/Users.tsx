import { Fragment } from "react";
import { Link, useLoaderData } from "react-router";

const usersList = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

// In data mode, a loader runs before the route renders and provides its data.
export const usersLoader = () => {
  return usersList;
};

const Users = () => {
  const users = useLoaderData<typeof usersLoader>();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <Fragment key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Users;
