import React, { Component } from "react";
import { deleteMovie } from "../services/fakeMovieService";

class DeleteButton extends Component {
  state = {
    deleteButton: deleteMovie(this.props.deleteID),
    deleteID: this.props.deleteID,
  };
  render() {
    return (
      <button onClick={this.state.deleteButton} className="btn btn-danger">
        Delete
      </button>
    );
  }
}

export default DeleteButton;
