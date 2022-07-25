import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-outline-primary">
          Increment
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge badge-pill badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
