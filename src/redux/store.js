import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './todos'

export default configureStore({
  reducer: {
    matodos:todoSlice
  },
})