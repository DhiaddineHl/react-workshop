import React from "react";
import { useParams, useSearchParams } from "react-router";

const UserDetails = () => {
  let params = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <p>This is the user {params.id} details page.</p>
    </div>
  );
};

export default UserDetails;
