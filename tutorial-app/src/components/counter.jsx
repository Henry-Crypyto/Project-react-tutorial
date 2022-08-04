import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-outline-primary">
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge badge-pill badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
