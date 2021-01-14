import React, { Component } from 'react';
import './App.css';
import BlogPost from './BlogPost/BlogPost';
import Clock from './Clock/Clock'

class App extends Component {
  state = {
    blogPosts: [
      { id: '1', title: 'Post Title 1', description: "Post description 1" ,avatar: "1.png" },
      { id: '2', title: 'Post Title 2', description: "Post description 2" ,avatar: "2.jpg" },
      { id: '3', title: 'Post Title 3', description: "Post description 3" ,avatar: "3.jpg" },
    ]
  }

  render () {
    let blogPosts = (
      <div>
        {this.state.blogPosts.map((blogPost, index) => {
          return <BlogPost
            title={blogPost.title} 
            description={blogPost.description}
            avatar={blogPost.avatar}
            key={blogPost.id}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <Clock/>
        <h1>Blog Posts</h1>
        {blogPosts}
      </div>
    );
  }
}

export default App;
