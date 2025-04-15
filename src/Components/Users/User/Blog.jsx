import React, { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import UserDetail from "../../UserDetails/UserDetail";

const Blog = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
    const [visitHome, setVisitHome] = useState(false);



  const { id, name, email, phone } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  const userStyle = {
    border: "20px solid yellow",
    borderRadius: "20px ",
    padding: "10px",
    margin: "10",
  };

  if(visitHome){
    return<Navigate to='/'></Navigate>
  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetail userPromise={userPromise}></UserDetail>
        </Suspense>
      
      )
     }

     <button onClick={() => setVisitHome(true)}> Visit Home</button>
    </div>


  );
};

export default Blog;
