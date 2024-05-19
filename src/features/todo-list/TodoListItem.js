import { useDispatch } from "react-redux";
import { updateItemChecked, setTodoToUpdate, toggleInputForm, todoRemoved } from "./todoListSlice";
import { format, parseISO } from "date-fns";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const formattedDate = format(parseISO(todo.date), "MM/dd/yyyy");
    const onCheckboxChange = () => {
      dispatch(updateItemChecked(todo.id))
    }
    const onEditClick = () => {
      dispatch(setTodoToUpdate(todo))
      dispatch(toggleInputForm())
    }

    const onRemoveClick = () => {
      dispatch(todoRemoved(todo.id))
    }

  
  return (
    <li key={todo.id} className="todo">
      <input type="checkbox" id={todo.id} checked={todo.checked} onChange={onCheckboxChange} />
      <label className="todo-label" htmlFor={todo.id}>
        <p className="todo-title">{todo.title}</p>
        <span className="todo-description">{todo.description}</span>
        <span className="todo-date-created">{formattedDate}</span>
      </label>
      <div className="todo-actions">
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onRemoveClick}>Remove</button>
      </div>
    </li>
  )
}

export default TodoListItem;