import { useEffect, useState } from "react";

const ListItem = ({ item, completed, id, setList }) => {

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
    // console.log(edit);
  }

  const handleUpdateItem = e => {
    e.preventDefault();
    console.log(e.target.parentElement.id);
    item = edit;
    console.log(item);
  }

  if (editing) {
    return (
      <div>
      <form id={id}>
        <div>
          <label htmlFor="to-do-item">Enter item: </label>
          <input 
           id="to-do-item"
           name="to-do-item"
          //  value={item}
          placeholder={item}
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