import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated, toggleInputForm } from "./todoListSlice";

const UpdateTodoForm = () => {
  const todoToUpdate = useSelector(state => state.todoList.todoToUpdate);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(todoToUpdate.title);
  const [description, setDescription] = useState(todoToUpdate.description);

  const onTitleChanged = (event) => setTitle(event.target.value);
  const onDescriptionChanged = (event) => setDescription(event.target.value);

  const canUpdate = Boolean(title);

  const onUpdateClick = (event) => {
    event.preventDefault();
    dispatch(todoUpdated({ ...todoToUpdate, title: title, description: description }));
    dispatch(toggleInputForm());
    setTitle('');
    setDescription('');
  }

  const onCancelClick = () => {
    dispatch(toggleInputForm())
  }

  return (
    <form className="todo-form">
      <h2>Update the todo</h2>
      <input id="title" type="text" placeholder="Enter a todo" value={title} onChange={onTitleChanged} />
      <textarea id="description" value={description} onChange={onDescriptionChanged} />
      <button type="submit" disabled={!canUpdate} onClick={onUpdateClick}>Update</button>
      <button onClick={onCancelClick}>Cancel</button>
    </form>
  )
}

export default UpdateTodoForm;