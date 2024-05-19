import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: [
    {
      id: nanoid(),
      title: 'do laundry',
      description: 'separate white and colors',
      date: new Date().toISOString(),
      checked: false,
    }
  ],
  toggleForm: false,
  todoToUpdate: {},
}

const todoListSlice = createSlice({
  name: 'todo-list',
  initialState,
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        state.todos.push(action.payload)
      },
      prepare: (title, description) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date: new Date().toISOString(),
            checked: false,
          }
        }
      }
    },
    updateItemChecked: (state, action) => {
      const todoItem = state.todos.find(item => item.id === action.payload);
      if (todoItem) {
        todoItem.checked = !todoItem.checked;
      }
    },
    toggleInputForm: (state) => {
      state.toggleForm = !state.toggleForm;
    },
    setTodoToUpdate: (state, action) => {
      state.todoToUpdate = action.payload;
    },
    todoUpdated: (state, action) => {
      const todoItemIndex = state.todos.findIndex(item => item.id === action.payload.id);
      if (todoItemIndex !== -1) {
        state.todos[todoItemIndex] = action.payload;
      }
    },
    todoRemoved: (state, action) => {
      const todoItemIndex = state.todos.findIndex(item => item.id === action.payload);
      if (todoItemIndex !== -1) {
        state.todos.splice(todoItemIndex, 1)
      }
    }
  }
})

export const selectAllTodoList = (state) => state.todoList.todos;

export const { todoAdded, todoUpdated, todoRemoved, updateItemChecked, toggleInputForm, setTodoToUpdate } = todoListSlice.actions;

export default todoListSlice.reducer;