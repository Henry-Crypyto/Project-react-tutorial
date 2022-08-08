import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters, onDecrement } =
      this.props;

    return (
      <React.Fragment>
        <button onClick={onReset}>Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Counters;
