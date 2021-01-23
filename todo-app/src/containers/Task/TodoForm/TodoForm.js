import React, { Component } from 'react';
import axios from 'axios';

import './TodoForm.css';

class TodoForm extends Component {
    state = {
        todoItem: '',
        completed: 'false'
    }

    postDataHandler = () => {
        const data = {
            todoItem: this.state.todoItem,
            completed: "false"
        };
        axios.post('/todos', data)
            .then(response => {
               alert("created");
               this.setState({todoItem: '',
               completed: 'false'})
            });
    }

    render () {
        return (
            <div className="TodoForm">
                <h1>Add Todo</h1>
                <label>Title</label>
                <input type="text" value={this.state.todoItem} onChange={(event) => this.setState({todoItem: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Todo</button>
            </div>
        );
    }
}

export default TodoForm;