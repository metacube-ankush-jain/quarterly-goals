import React from 'react';

import './CommentBox.css';

const commentBox = ( props ) => {
    return (
        <div className="commentBox" onClick={props.click}>
            <span className="commentTitle">{props.title}</span>
            <span className="commentDescription">{props.description}</span>
        </div>
    )
};

export default commentBox;