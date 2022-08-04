import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onReset}>Reset</button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Counters;
