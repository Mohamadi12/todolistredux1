import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, togleTodo } from '../redux/todos'

const TodoElement = ({todop}) => {
  const dispatch=useDispatch()

  return (
    <div>
      {/* Pour appliqué le style sur isDone,on cible le principale comme ul,
      comme style={todop.isDone?{backgroundColor:'red'}:{backgroundColor:'pink'}} */}
      <ul key={todop.id}>
        <li>ID: {todop.id}</li>
        <li>First_Name: {todop.first_Name}</li>
        <li>Last_Name: {todop.last_Name}</li>
        <div>
          <button onClick={()=>dispatch(deleteTodo(todop.id))}>Delete</button>
          <button onClick={()=>dispatch(togleTodo(todop.id))}>{todop.isDone ? 'Yes':'No' }</button>
        </div>
      </ul>
    </div>
  )
}

export default TodoElement
