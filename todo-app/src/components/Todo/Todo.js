import React from 'react';

import './Todo.css';

const todo = (props) => {
    let classes = ["Todo"];
    if(props.completed === "true") {
        classes.push("completed")
    }
    console.log(props.showToggle);
    return (
        <article className={classes.join(" ")}>
            <h1>{props.title}</h1>
            <button onClick={props.clicked}>View</button>
            {
                props.showToggle ? <button onClick={props.toggle}>Toggle</button> : null
            }
            
        </article>
    );
};

export default todo;