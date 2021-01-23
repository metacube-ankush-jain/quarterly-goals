import React, { Component } from 'react';
import axios from 'axios';

import './TodoInfo.css';

class TodoInfo extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/todos/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/todos/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            let classes = ["TodoInfo"];
            if(this.state.loadedPost.completed == "true") {
                classes.push("completed");
            }
            post = (
                <div className={classes.join(" ")}>
                    <h1>{this.state.loadedPost.todoItem}</h1>
                </div>

            );
        }
        return post;
    }
}

export default TodoInfo;