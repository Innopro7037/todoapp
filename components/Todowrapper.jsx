import React from 'react'
import Todoform from './Todoform'
import Todo from './Todo'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
uuidv4();

const Todowrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <div className='todo-wrapper'>
    <h1>Like & Follow</h1>
    <Todoform 
        addTodo={addTodo}
    />
    {todos.map((todo, index) => (
           
            <Todo 
            task={todo}
            key={index}
            deleteTodo={deleteTodo}
            />
        
    ))}
    
    </div>
  )
}

export default Todowrapper