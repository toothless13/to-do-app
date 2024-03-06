import { useContext, useEffect, useCallback } from "react"
import { Context } from "../Context/AuthContext"
import { db } from "../config/firebase"
import { collection, query, getDocs, doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore"
import toast, { Toaster } from "react-hot-toast"
import ListItem from './ListItem';

const ListContainer = ({ list, setList }) => {

  const { user } = useContext(Context);

  const getUserTasks = useCallback(async () => {
    if (user) {
      try { const q = query(collection(db, "tasks"));
      const querySnapshot = await getDocs(q);
      let userList = [];
      querySnapshot.forEach(doc => {
        if (doc.data().uid === user.uid) {
          userList.push(doc.data().task);
        }
      });
      setList(userList);
    } catch (error) {
      toast.error(error.message);
    }
      // console.log(userList);
      
    }
  }, [setList, user]);



  const handleComplete = async (id) => {
    if (user) {
      // console.log(user);
      try {
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
      } catch (error) {
        toast.error(error.message);
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
      try {
        await updateDoc(doc(db, "tasks", `${id} - ${user.uid}`), {
          "task.todo": todo,
          updatedAt: serverTimestamp()
        });
      } catch (error) {
        toast.error(error.message)
      }
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
    if (user) {
      try {
        await deleteDoc(doc(db, "tasks", `${id} - ${user.uid}`));
      } catch (error) {
        toast.error(error.message);
      }
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
      <Toaster />
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