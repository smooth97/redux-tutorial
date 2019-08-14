import React from 'reaact';

const Post = ({title, message}) => {

    return(
        <div>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Post;