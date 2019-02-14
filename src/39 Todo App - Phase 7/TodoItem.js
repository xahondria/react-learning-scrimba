/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react"

function TodoItem(props) {

  let todoItemClassList = props.item.completed ? 'todo-item todo-item--checked' : 'todo-item';

  return (
    <div className={todoItemClassList}>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem;
