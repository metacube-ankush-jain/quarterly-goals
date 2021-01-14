import React from 'react';

import './ActiveComment.css';

const activeComment = ( props ) => {
    return (
        <div className="activeComment">
            <span className="title">{props.title}</span>
            <span className="description">{props.description}</span>
        </div>
    )
};

export default activeComment;