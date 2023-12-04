import React from 'react'
import TodoElement from './TodoElement'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos=useSelector(state=>state.matodos)
  return (
    <div>
     {todos.map(el=> <TodoElement todop={el}/>)}
    </div>
  )
}

export default TodoList
