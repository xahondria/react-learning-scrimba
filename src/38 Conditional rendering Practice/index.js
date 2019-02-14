import React from 'react';
import './style.css';

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {
        isLoggedIn: !this.state.isLoggedIn,
      }
    )
  }

  render() {
    let buttonText = this.state.isLoggedIn ? 'log out' : 'log in';
    let displayText = this.state.isLoggedIn ? 'Logged in' : 'Logged out';

    return (
      <div>
        <button
          className={'button__log-in'}
          type='button'
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
        <p>{displayText}</p>
      </div>
    )
  }
}


export default App;