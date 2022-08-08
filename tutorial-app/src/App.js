import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handleIncrement = product => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(product);
    counters[index] = { ...product };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = product => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(product);
    counters[index] = { ...product };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = counterReset => {
    const counters = this.state.counters.map(m => {
      m.value = 0;
      return m;
    });
    this.setState({ counters });
  };
  handleDelete = currentId => {
    const counters = this.state.counters.filter(m => m.id !== currentId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(m => m.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
