import React, {Component} from 'react';
import FormComponent from './FormComponent'

class Form extends Component {
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
      <FormComponent
        {...this.state}
        handleChange={this.handleChange}
      />
    )
  }
}

export default Form;