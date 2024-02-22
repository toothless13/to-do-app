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

  const todoTextClass = "col-span-5 text-left";

  return (
    <div className="grid grid-cols-7 ga-3 rounded-full border-2 border-zinc-300 my-5 p-2">
      <input type="checkbox" onClick={() => handleComplete(id)} className="mx-2 w-fit col-span-1" />
      <div className={completed ?  todoTextClass + " done" : todoTextClass}
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
      <button onClick={() => handleDelete(id)} className="text-lg text-red-600 col-span-1" >&times;</button> 
  </div>
  )
}

export default ListItem