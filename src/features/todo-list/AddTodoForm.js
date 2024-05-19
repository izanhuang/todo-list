import { useState } from "react"
import { useDispatch } from "react-redux";
import { todoAdded} from "./todoListSlice";

const AddTodoForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onDescriptionChanged = (event) => setDescription(event.target.value);

  const canAdd = Boolean(title);

  const onAddClick = () => {
    dispatch(todoAdded(title, description));
    setTitle('');
    setDescription('');
  }

  return (
    <form className="todo-form">
      <h2>Add a todo</h2>
      <input id="title" type="text" placeholder="Enter a todo" value={title} onChange={onTitleChanged} />
      <textarea id="description" value={description} onChange={onDescriptionChanged} />
      <button type="submit" disabled={!canAdd} onClick={onAddClick}>Add</button>
    </form>
  )
}

export default AddTodoForm;