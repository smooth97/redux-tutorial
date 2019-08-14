import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const AllPost = (props) => {
    
    return(
        <div>
            <h1>All Posts</h1>
            {console.log(props.posts)}
            {props.posts.map((post) => <Post key={post.id} post={post} ></Post>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state
    }
}

export default connect(mapStateToProps)(AllPost);