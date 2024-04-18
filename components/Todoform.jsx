import React from 'react'
import { useState } from 'react'

const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" 
            className='todo-input'
            placeholder='Todays tasks are???'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button
            type='submit'
            className='todo-btn'
        >Add Task</button>
    </form>
  )
}

export default Todoform