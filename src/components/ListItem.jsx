import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const ListItem = ({ todo, completed, id, handleComplete, handleUpdate, handleDelete }) => {

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo);
  const springs = useSpring({
    from: { 
            y: 50,
            opacity: 0,
           },
    to: { 
          y: 0,
          opacity: 1, 
        },
  });

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

  const todoTextClass = "col-span-5 text-left truncate";

  return (
    <animated.div className="grid grid-cols-7 ga-3 items-center border-b-2 border-zinc-300 my-5 p-2" style={{...springs}}>
      <input type="checkbox" onClick={() => handleComplete(id)} className="ml-1 mr-3 col-span-1 appearance-none w-4 h-4 border-2 rounded-full text-zinc-300 indeterminate:bg-zinc-300 checked:to-zinc-300 checked:bg-teal-400 hover:cursor-pointer" defaultChecked={completed ? true : false }/>
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
              className="bg-zinc-800 text-teal-400 pl-2"
            />
          </div>
        </form>
      ) : (
        todo
      )}
      </div>
      <button onClick={() => handleDelete(id)} className="text-xl text-red-600 col-span-1" >&times;</button> 
  </animated.div>
  )
}

export default ListItem