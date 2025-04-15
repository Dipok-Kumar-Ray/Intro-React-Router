import React from 'react';
import { Link } from 'react-router';


const Blog = ({user}) => {
    const {id, name, email, phone}  = user;

    const userStyle = {

        border:'20px solid yellow',
        borderRadius:'20px ',
        padding:'10px',
        margin:'10'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
          <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default Blog;