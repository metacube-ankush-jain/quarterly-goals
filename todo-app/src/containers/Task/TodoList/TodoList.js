import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Todo from '../../../components/Todo/Todo';
import './TodoList.css';

class TodoList extends Component {
    state = {
        todos: [],
        showToggle: false
    }


    postSelectedHandler = ( id ) => {
        this.props.history.push( '/todoList/' + id );
    }

    toggleToDoHandler = (id) => {
        axios.post("/toggle/"+ id)
        .then( response => {
            let updatedTodo = [...this.state.todos];
            updatedTodo = updatedTodo.filter(function( obj ) {
                return obj.id !== response.data.id;
            });
            this.setState( { todos: updatedTodo} );
        } )
        .catch( error => {
            console.log( error );
            // this.setState({error: true});
        } );
    }

    filterToDo = (filter, isCompleted) => {
        console.log("jain");
        let url = "/todos"
        if(filter){
            url = url + '?filter=' + isCompleted;
        }
        axios.get(url)
            .then( response => {
                this.setState( { todos: response.data, showToggle : filter  },
                    );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.todos.map( todo => {
                return (
                    <Todo
                        key={todo.id}
                        title={todo.todoItem}
                        completed={todo.completed}
                        clicked={() => this.postSelectedHandler( todo.id )} 
                        toggle= {() => this.toggleToDoHandler( todo.id )}
                        showToggle= {this.state.showToggle}/>
                );
            } );
        }

        return (
            <div>
                <div style={{textAlign: 'center'}}>
                <button onClick={() => this.filterToDo(false)} >All</button> 
                <button onClick={() => this.filterToDo(true,"false")} >Show Active</button> 
                <button onClick={() => this.filterToDo(true, "true")} >Show Completed</button>
                </div>
                <section className="TodoList">
                    {posts}
                </section>
                
            </div>
        );
    }
}

export default TodoList;