import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { getUserById } from "../data/users";

export const itemDetailsLoader = ({ params }: LoaderFunctionArgs) => {
  const user = getUserById(params.id);
  const item = user?.items.find((i) => i.id === Number(params.itemId));
  if (!user || !item) {
    throw new Response("Item not found", { status: 404 });
  }
  return { user, item };
};

const ItemDetails = () => {
  const { user, item } = useLoaderData<typeof itemDetailsLoader>();

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
