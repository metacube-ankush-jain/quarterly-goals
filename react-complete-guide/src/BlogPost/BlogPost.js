import React from 'react';

import './BlogPost.css';

const blogPost = ( props ) => {
    return (
        <div className="blogPost">
            <img src={props.avatar} className="avatar"></img>
            <span className="title">{props.title}</span>
            <span className="description">{props.description}</span>
        </div>
    )
};

export default blogPost;