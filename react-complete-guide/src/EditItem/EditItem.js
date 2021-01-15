import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(e) {
    this.props.location.onEdit(e);
    this.props.history.push('/');
  }

  render() {
    return (
      <div >
        <form  onSubmit={this.onEdit}>
          <input
            maxLength='25'
            placeholder='Type something here'
            defaultValue={this.props.location.name}
          />
          <br />
          <br />
          <button>Update</button>
        </form>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default EditItem;
