import { useState } from "react";

const ListItem = ({ todo, completed, id, handleComplete, handleUpdate, handleDelete }) => {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo);

  const handleEditing = e => {
    e.preventDefault();
    setEditing(true);
  }

  const handleFieldChange = e => {
    setEditText(e.target.value);
  }

  const handleUpdateItem = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInput = formData.get("to-do-item");
    handleUpdate(id, userInput);
    setEditing(false);
  }

  if (editing) {
    return (
      <div>
      <form id={id} onSubmit={handleUpdateItem}>
        <div>
          <label htmlFor="to-do-item">Enter item: </label>
          <input 
           id="to-do-item"
           name="to-do-item"
           autoFocus
           value={editText}
           onChange={handleFieldChange}
           onBlur={() => {
            setEditing(false);
            handleUpdate(id, editText);
           }}
          />
        </div>
        <button type="submit">Add!</button>
      </form>
    </div>
    )
  } else {
    return (
      <div className={completed ? "done" : ""}>
        <input type="checkbox" onClick={() => handleComplete(id)} />
        <div onClick={handleEditing}>{todo}</div>
        <button onClick={() => handleDelete(id)}>&times;</button>
      </div>
    )
  }
}

export default ListItem