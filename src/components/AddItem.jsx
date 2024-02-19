import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ list, setList }) => {

  const [field, setField] = useState("")

  const handleFieldChange = e => {
    setField(e.target.value);
  }

  const handleAddItem = e => {
    e.preventDefault();
    setList([...list, {item: field, completed: false, id: uuidv4()}]);
    setField("");
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="to-do-item">Enter item: </label>
          <input 
           id="to-do-item"
           name="to-do-item"
           value={field}
          onChange={handleFieldChange}
          />
        </div>
        <button type="submit" onClick={handleAddItem}>Add!</button>
      </form>
    </div>
  )
}

export default AddItem