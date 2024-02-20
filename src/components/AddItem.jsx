import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ list, setList }) => {

  const inputRef = useRef();

  const handleAddItem = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInput = formData.get("to-do-item");
    setList([...list, {todo: userInput, completed: false, id: uuidv4()}]);
    inputRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <div>
          <label htmlFor="to-do-item">Enter item: </label>
          <input 
           id="to-do-item"
           name="to-do-item"
           type="text"
           ref={inputRef}
          />
        </div>
        <button type="submit">Add!</button>
      </form>
    </div>
  )
}

export default AddItem