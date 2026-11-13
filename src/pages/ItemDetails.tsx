import { Link, useParams } from "react-router";
import { getUserById } from "../data/users";

const ItemDetails = () => {
  const { id, itemId } = useParams();
  const user = getUserById(id);
  const item = user?.items.find((i) => i.id === Number(itemId));

  if (!user || !item) {
    return (
      <div className="container py-4">
        <div className="alert alert-warning">Item not found.</div>
        <Link to={user ? `/users/${user.id}` : "/users"} className="btn btn-secondary">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <Link to={`/users/${user.id}`} className="btn btn-link px-0 mb-3">
        &larr; Back to {user.name}
      </Link>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title h3">{item.name}</h1>
          <h6 className="card-subtitle mb-2 text-muted">Owned by {user.name}</h6>
          <p className="card-text">{item.description}</p>
          <p className="card-text fw-bold">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
