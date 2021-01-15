import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(e) {
    this.props.onAdd(e);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.onAdd}>
          <input maxLength='25' placeholder='Type something here' />
          <br />
          <br />
          <button>Add</button>
        </form>
        <Link to='/'>
          Back
        </Link>
      </div>
    );
  }
}

export default AddItem;
