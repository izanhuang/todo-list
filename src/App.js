import AddTodoForm from './features/todo-list/AddTodoForm';
import TodoList from './features/todo-list/TodoList';
import { useSelector } from 'react-redux';
import UpdateTodoForm from './features/todo-list/UpdateTodoForm';
import './App.css'

function App() {
  const isToggled = useSelector(state => state.todoList.toggleForm);

  const todoForm = isToggled ? <UpdateTodoForm/> : <AddTodoForm />

  return (
    <main>
      {todoForm}
      <TodoList />
    </main>
  );
}

export default App;
