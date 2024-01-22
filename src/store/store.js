import { configureStore } from '@reduxjs/toolkit'
import todos from '../todos/todos'

export const store = configureStore({
  reducer: {
    todos : todos
  },
})