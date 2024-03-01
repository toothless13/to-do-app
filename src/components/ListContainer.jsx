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



  const handleComplete = async (id) => {
    if (user) {
      const task = list.find(item => item.id === id);
      if (task.completed === false) {
        await updateDoc(doc(db, "tasks", `${id} - ${user.uid}`), {
          "task.completed": true,
          updatedAt: serverTimestamp()
        });
      } else {
        await updateDoc(doc(db, "tasks", `${id} - ${user.uid}`), {
          "task.completed": false,
          updatedAt: serverTimestamp()
        });
      }
    } else {
      const updatedList = list.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
  
      setList(updatedList);
    }
  }

  const handleUpdate = async (id, todo) => {
    if (user) {
      await updateDoc(doc(db, "tasks", `${id} - ${user.uid}`), {
        "task.todo": todo,
        updatedAt: serverTimestamp()
      });
    } else {
      const updatedList = list.map(item => {
        if (item.id === id) {
          item.todo = todo;
        }
        return item;
      });
      setList(updatedList);
    }
  }

  const handleDelete = async (id) => {
    // console.log(id);
    // console.log(user.uid);

    if (user) {
      await deleteDoc(doc(db, "tasks", `${id} - ${user.uid}`));
    } else {
      const updatedList = list.filter(item => item.id !== id);
      setList(updatedList);
    } 
  }

  useEffect(() => {
    getUserTasks();
  }, [handleDelete, handleUpdate, handleComplete]);

  return (
    <div className="">
      {!user && list.length == 0 ? <div>Add an item below</div> : 
        <ul>
          {list.map(item =>
            <ListItem {...item} setList={setList} key={item.id} handleComplete={handleComplete} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
          )}
        </ul>
      }
    </div>
  )
}

export default ListContainer