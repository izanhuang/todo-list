import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from '../features/todo-list/todoListSlice'

const store = configureStore({
  reducer: {
    todoList: todoListReducer
  }
})

export default store;