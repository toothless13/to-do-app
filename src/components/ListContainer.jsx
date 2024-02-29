import { useContext, useEffect, useCallback } from "react"
import { Context } from "../Context/AuthContext"
import { db } from "../config/firebase"
import { collection, query, getDocs, doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore"
import ListItem from './ListItem';

const ListContainer = ({ list, setList }) => {

  const { user } = useContext(Context);

  const getUserTasks = useCallback(async () => {
    if (user) {
      const q = query(collection(db, "tasks"));
      const querySnapshot = await getDocs(q);
      let userList = [];
      querySnapshot.forEach(doc => {
        if (doc.data().uid === user.uid) {
          userList.push(doc.data().task);
        }
      });
      // console.log(userList);
      setList(userList);
    }
  }, [setList, user]);



  const handleComplete = (id) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setList(updatedList);
  }

  const handleUpdate = async (id, todo) => {
    // const updatedList = list.map(item => {
    //   if (item.id === id) {
    //     item.todo = todo;
    //   }
    //   return item;
    // });

    await updateDoc(doc(db, "tasks", `${id} - ${user.uid}`), {
      "task.todo": todo,
      updatedAt: serverTimestamp()
    });
    // setList(updatedList);
  }

  const handleDelete = async (id) => {
    console.log(id);
    console.log(user.uid);
    // const updatedList = list.filter(item => item.id !== id);
    await deleteDoc(doc(db, "tasks", `${id} - ${user.uid}`));

    // setList(updatedList);
  }

  useEffect(() => {
    getUserTasks();
  }, [handleDelete, handleUpdate]);

  return (
    <div className="">
      <ul>
        {list.map(item =>
          <ListItem {...item} setList={setList} key={item.id} handleComplete={handleComplete} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        )}
      </ul>
    </div>
    
  )
}

export default ListContainer