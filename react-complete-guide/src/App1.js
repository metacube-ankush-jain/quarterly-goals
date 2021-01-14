import React, { Component } from "react";
import "./App1.css";
import CommentBox from "./CommentBox/CommentBox";
import ActiveComment from "./ActiveComment/ActiveComment";

class App1 extends Component {
  state = {
    comments: [
      { id: "1", title: "Post Title 1", description: "Post description 1" },
      { id: "2", title: "Post Title 2", description: "Post description 2" },
      { id: "3", title: "Post Title 3", description: "Post description 3" },
    ],
    activeComment: null,
  };

  onClickHandler = (id) => {
    const activeCommentId = this.state.comments.findIndex((p) => {
      return p.id === id;
    });
    this.setState({ activeComment: this.state.comments[activeCommentId] });
  };

  render() {
    const style = {
      textAlign: "center",
      width: "80%",
      margin: "auto",
    };

    let comments = (
      <div className="section1">
        {this.state.comments.map((comment) => {
          return (
            <CommentBox
              click={() => this.onClickHandler(comment.id)}
              title={comment.title}
              description={comment.description}
              key={comment.id}
            />
          );
        })}
      </div>
    );

    return (
      <div style={style}>
        <h1>Comment Box</h1>
        <div className="App1">
          {comments}
          {this.state.activeComment ? (
            <div className="section2">
              <ActiveComment
                title={this.state.activeComment.title}
                description={this.state.activeComment.description}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App1;
