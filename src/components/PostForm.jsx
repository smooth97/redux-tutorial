import React, { useState,useRef } from 'react';
import { connect } from 'react-redux';

const PostForm = () => {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const getTitle = (e) => {
        setTitle(e.target.value);
    }

    const getMessage = (e) => {
        setMessage(e.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date(),
            title,
            message
        }
        console.log(data);
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={getTitle} placeholder="Enter Post Title"/><br/><br/>
                <textarea rows="5" onChange={getMessage} cols="28" placeholder="Enter Post"/><br/><br/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default connect()(PostForm);