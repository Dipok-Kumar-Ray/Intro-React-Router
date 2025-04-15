import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BlogDetails = () => {
    const user = useLoaderData();


    const {userId} = useParams();
    console.log(userId);

    // const params = useParams();
    // console.log(params.userId);

    const {name, website} = user;

    return (
        <div>
            <h3>Users detailse here....</h3>
            <h3>Name : {name}</h3>
            <p>Website : {website}</p>
        </div>
    );
};

export default BlogDetails;