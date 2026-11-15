import { Link } from "react-router";
import { usersList } from "../data/users";

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
