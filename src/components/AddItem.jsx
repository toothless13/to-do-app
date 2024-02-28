import { useRef, useContext } from "react";
import { Context } from "../Context/AuthContext"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebase"
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ list, setList }) => {

  const { user } = useContext(Context);
  const inputRef = useRef();

  // const handleAddItem = e => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const userInput = formData.get("to-do-item");
  //   if(userInput !== "") {
  //     setList([...list, {todo: userInput, completed: false, id: uuidv4()}]);
  //     inputRef.current.value = "";
  //   }
  // }
  console.log(user);

  const handleAddItem = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInput = formData.get("to-do-item");
    if(userInput !== "") {
      const task = {
        todo: userInput, 
        completed: false, 
        id: uuidv4(),
      }
      if (user) {
        try {
          const test = await setDoc(doc(db, "tasks", `${task.id} - ${user.uid}`), {
            uid: user.uid,
            task: { ...task },
            createdAt: serverTimestamp()
          });
          console.log(test);
        } catch (error) {
          console.log(error);
        }
      }
      setList([...list, {todo: userInput, completed: false, id: uuidv4()}]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="my-5">
      <form onSubmit={handleAddItem} className="grid grid-cols-7 ga-3 pr-2">
        <div className="col-span-5 w-full">
          {/* <label htmlFor="to-do-item" className="mx-2 w-fit col-span-1">Enter item: </label> */}
          <input 
           id="to-do-item"
           name="to-do-item"
           type="text"
           ref={inputRef}
           className="w-4/5 rounded-lg h-10 text-zinc-800 pl-2"
          />
        </div>
        <button type="submit" className="col-span-2 rounded-full hover:bg-zinc-300 hover:text-zinc-800 bg-zinc-800 text-zinc-300 border-2 border-zinc-300">Add!</button>
      </form>
    </div>
  )
}

export default AddItem