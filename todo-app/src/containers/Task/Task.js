import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Task.css';
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';
import TodoInfo from './TodoInfo/TodoInfo'; 
class Task extends Component {
    render () {
        return (
            <div className="Task">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/todoList/"
                                exact
                                >Todos</NavLink></li>
                            <li><NavLink to="/todo-form">Create Todo</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path="/todo-form" component={TodoForm} />
                    <Route path="/todoList" component={TodoList} exact/>
                    <Route path={'/todoList/:id'} exact component={TodoInfo} />
                </Switch>
            </div>
        );
    }
}

export default Task;
