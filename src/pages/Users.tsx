import { Link } from "react-router";

const usersList = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersList.map((user) => (
          <>
            <Link key={user.id} to={`/users/${user.id}`}>
              {user.name}
            </Link>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Users;
