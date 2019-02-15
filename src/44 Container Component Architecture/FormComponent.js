import React from 'react';
import './style.css'

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          name='firstName'
          placeholder="First Name"
          onChange={props.handleChange}
          value={props.firstName}/><br/>
        <input
          name='lastName'
          placeholder="Last Name"
          onChange={props.handleChange}
          value={props.lastName}/><br/>
        <input
          name='age'
          placeholder="Age"
          onChange={props.handleChange}
          value={props.age}/><br/><br/>

        <label>
          <input
            name='gender'
            type='radio'
            value='male'
            checked={props.gender === 'male'}
            onChange={props.handleChange}/> Male
        </label>
        <br/>
        <label>
          <input
            name='gender'
            type='radio'
            value='female'
            checked={props.gender === 'female'}
            onChange={props.handleChange}/> Female
        </label>
        <br/>

        <select name='destination' onChange={props.handleChange}>
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
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.d4}
          /> none
        </label>
        <label>
          <input
            type='checkbox'
            name='d1'
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.d1}
          /> diet number 1
        </label>
        <label>
          <input
            type='checkbox'
            name='d2'
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.d2}
          /> diet number 2
        </label>
        <label>
          <input
            type='checkbox'
            name='d3'
            onChange={props.handleChange}
            checked={props.dietaryRestrictions.d3}
          /> diet number 3
        </label>
        <br/>

        <button>Submit</button>
      </form>
      <hr/>
      <h2>Entered information:</h2>
      <p>Your name: {props.firstName} {props.lastName}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <p>
        Your dietary restrictions:
        {props.dietaryRestrictions.d4 ? ' d4,' : ''}
        {props.dietaryRestrictions.d1 ? ' d1,' : ''}
        {props.dietaryRestrictions.d2 ? ' d2,' : ''}
        {props.dietaryRestrictions.d3 ? ' d3,' : ''}
      </p>
    </main>
  )
}

export default FormComponent;