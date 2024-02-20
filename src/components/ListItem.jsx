import { useState } from "react";

const ListItem = ({ todo, completed, id, handleComplete, handleUpdate, handleDelete }) => {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo);

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

  return (
    <div>
      <input type="checkbox" onClick={() => handleComplete(id)} />
      <div className={completed ? "done" : ""}
      onClick={() => {
        if (!completed) {
          setEditing(true);
        }
      }}
    >
      {editing ? (
        <form id={id} onSubmit={handleUpdateItem}>
          <div>
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
              aria-label="edit input item"
            />
          </div>
          <button type="submit">Add!</button>
        </form>
      ) : (
        todo
      )}
      </div>
      <button onClick={() => handleDelete(id)}>&times;</button> 
  </div>
  )
}

export default ListItem