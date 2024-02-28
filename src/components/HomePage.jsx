import { useState, useContext, useEffect, useCallback } from "react"
import { Context } from "../Context/AuthContext"
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid'
import AddItem from "./AddItem"
import ListContainer from "./ListContainer"

const HomePage = () => {

  const { user } = useContext(Context);

  const initialState = {
    list: [
      // {
      //   todo: "test 1",
      //   completed: false,
      //   id: uuidv4()
      // },
      // {
      //   todo: "test 2",
      //   completed: false,
      //   id: uuidv4()
      // },
      // {
      //   todo: "test 3",
      //   completed: false,
      //   id: uuidv4()
      // }
    ],
  }



  const [list, setList] = useState([]);

  const getUserTasks = useCallback(async () => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          setList((prevState) => {
            return [...prevState, doc.data().task];
          });
        }
      });      
    }

  },[setList, user])

  useEffect(() => {
    getUserTasks();
  }, []);

  return (
    <div className="w-4/5 md:w-3/4 lg:w-1/3 mx-auto text-center rounded-lg border-2 border-zinc-300 my-5 p-2">
      <ListContainer list={list} setList={setList} />
      <AddItem list={list} setList={setList} />
    </div>
  )
}

export default HomePage