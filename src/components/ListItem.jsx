import { useState } from "react";

const ListItem = ({ item }) => {

  const [editing, setEditing] = useState(false);
  const [edit, setEdit] = useState(item);

  const handleItemDone = e => {
    e.preventDefault();
    console.log(e.target.style.textDecoration);
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }

  const handleEditing = e => {
    e.preventDefault();
    console.log(e);
    setEditing(true);
  }

  const handleFieldChange = e => {
    console.log(item);
    console.log(e.target.value);
    setEdit(e.target.value);
  }

  const handleUpdateItem = e => {
    e.preventDefault();
    item = edit;
  }

  if (editing) {
    return (
      <div>
      <form>
        <div>
          <label htmlFor="to-do-item">Enter item: </label>
          <input 
           id="to-do-item"
           name="to-do-item"
           value={item}
          onChange={handleFieldChange}
          />
        </div>
        <button type="submit" onClick={handleUpdateItem}>Add!</button>
      </form>
    </div>
    )
  } else {
    return (
      <div>
        <div onClick={handleItemDone}>{item}</div>
        <button onClick={handleEditing}>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default ListItem