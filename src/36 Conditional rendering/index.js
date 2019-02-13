import React, {Component} from 'react';
import Conditional from './conditional';

import './style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      time: 4,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });

      clearInterval(intervalID);
    }, 4000);

    const intervalID = setInterval(() => this.setState((prevState) => {
      const newState = Object.assign(prevState);
      newState.time = prevState.time - 1;
      return newState;

    }), 1000)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading... {this.state.time}</h1> : <Conditional/> }
      </div>
    )
  }
}

export default App;
