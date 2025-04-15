import React from "react";
import { useLoaderData } from "react-router";
import Blog from "./User/Blog";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h2>This is Users...</h2>
      <div>
        {
        users.map(user => (<Blog key={user.id} user={user}></Blog>))
        }
      </div>
    </div>
  );
};

export default Users;
