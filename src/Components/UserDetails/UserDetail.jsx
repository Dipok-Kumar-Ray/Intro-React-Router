import React, { use } from 'react';

const UserDetail = ({userPromise}) => {
        const { name, username} = use(userPromise);
        // console.log('user details',  name, username);

    return (
        <div>
            <p><small> user Name : {username} </small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetail;