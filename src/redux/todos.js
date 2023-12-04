import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const todoSlice= createSlice({
  name: 'matodos',
  initialState:[
    {id:uuidv4(),first_Name:'Nana',last_Name:'Mohamed',isDone:false},
    {id:uuidv4(),first_Name:'Ouedra',last_Name:'Yacou',isDone:false},
    {id:uuidv4(),first_Name:'Yameo',last_Name:'Fadila',isDone:false},
  ],
  reducers: { 
    addTodo:(state,action)=>{
        const NewsTasks={
            id:uuidv4(),
            first_Name:action.payload,
            last_Name:action.payload,
            isDone:false
        }
        state.push(NewsTasks)
    },
    deleteTodo:(state,action)=>{
        return state.filter(el=>el.id !==action.payload)
    },
    togleTodo:(state,action)=>{
        const task=state.find(el=>el.id===action.payload)
        task.isDone =!task.isDone
    },
    searchTodo:(state,action)=>{
        const search=action.payload.toLowerCase()
        return state.filter(el=>
            el.first_Name.toLowerCase().includes(search.trim())||
            el.last_Name.toLowerCase().includes(search.trim))
    },
    updaTodo:(state,action)=>{
        const {id,first_Name,last_Name}=action.payload
        const upTodo=state.find(el=>el.id===id)
        if(upTodo){
            upTodo.first_Name=first_Name
            upTodo.last_Name=last_Name
        }
    }
   }
})
export const{updaTodo,searchTodo,togleTodo,deleteTodo,addTodo}=todoSlice.actions
export default todoSlice.reducer