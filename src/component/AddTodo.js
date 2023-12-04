import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todos'

const AddTodo = () => {
  const [first_Name,setFirst_Name]=useState('')
  const [last_Name,setLast_Name]=useState('')
  const dispatch=useDispatch()
  const handleAdd=()=>{
    dispatch(addTodo(first_Name + ' ' + last_Name));
    setFirst_Name('');
    setLast_Name('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={first_Name} onChange={(e) => setFirst_Name(e.target.value)} required/>
        <input type="text" value={last_Name} onChange={(e) => setLast_Name(e.target.value)} required/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodo
