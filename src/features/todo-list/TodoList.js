import { selectAllTodoList} from './todoListSlice';
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todoList = useSelector(selectAllTodoList);
  const activeTodos = todoList.filter(item => !item.checked)
  const completedTodos = todoList.filter(item => item.checked)

  const todoListItems = (todoList) => (todoList.map(todo => {
    return (
      <TodoListItem todo={todo} />
    )
  }))

  return (
    <section className="todo-list-section">
      <h2>Active</h2>
      <ul className="todo-list">
        {todoListItems(activeTodos)}
      </ul>
      <h2>Completed</h2>
      <ul className="todo-list">
        {todoListItems(completedTodos)}
      </ul>
    </section>
  )
}

export default TodoList;