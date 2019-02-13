import React, {Component} from 'react';
import Conditional from './conditional';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      time: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      isLoading: false,
    }), 1000)
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading... </h1> : <Conditional/> }
      </div>
    )
  }
}

export default App;