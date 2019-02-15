import React, {Component} from 'react';
import './style.css'

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'A',
      lastName: 'B',
      age: '14',
      gender: 'male',
      destination: 'Earth',
      dietaryRestrictions: {
        d4: true,
        d1: false,
        d2: true,
        d3: false,

      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const {name, value, type, checked} = ev.target;
    type === 'checkbox' ?
      this.setState((prevState) => {
        return {
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
        }
      }) :
      this.setState({[name]: value})
  }

  render() {

    return (
      <main>
        <form>
          <input
            name='firstName'
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.firstName}/><br/>
          <input
            name='lastName'
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}/><br/>
          <input
            name='age'
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.age}/><br/><br/>

          <label>
            <input
              name='gender'
              type='radio'
              value='male'
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}/> Male
          </label>
          <br/>
          <label>
            <input
              name='gender'
              type='radio'
              value='female'
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}/> Female
          </label>
          <br/>

          <select name='destination' onChange={this.handleChange}>
            <option value='Earth'>Earth</option>
            <option value='Mars'>Mars</option>
            <option value='Jupiter'>Jupiter</option>
            <option value='Moon'>Moon</option>
          </select>
          {/* Create select box for location here */}
          <br/>

          <label>
            <input
              type='checkbox'
              name="d4"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.d4}
            /> none
          </label>
          <label>
            <input
              type='checkbox'
              name='d1'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.d1}
            /> diet number 1
          </label>
          <label>
            <input
              type='checkbox'
              name='d2'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.d2}
            /> diet number 2
          </label>
          <label>
            <input
              type='checkbox'
              name='d3'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.d3}
            /> diet number 3
          </label>
          {/* Create check boxes for dietary restrictions here */}
          <br/>

          <button>Submit</button>
        </form>
        <hr/>
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.dietaryRestrictions.d4 ? ' d4,' : ''}
          {this.state.dietaryRestrictions.d1 ? ' d1,' : ''}
          {this.state.dietaryRestrictions.d2 ? ' d2,' : ''}
          {this.state.dietaryRestrictions.d3 ? ' d3,' : ''}
        </p>
      </main>
    )
  }
}

export default App;