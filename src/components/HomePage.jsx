import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AddItem from "./AddItem"
import ListContainer from "./ListContainer"

const HomePage = () => {

  const initialState = {
    list: [
      {
        item: "test 1",
        completed: false,
        id: uuidv4()
      },
      {
        item: "test 2",
        completed: false,
        id: uuidv4()
      },
      {
        item: "test 3",
        completed: false,
        id: uuidv4()
      }
    ],
  }

  const [list, setList] = useState(initialState.list);

  return (
    <div>
      <ListContainer list={list} setList={setList} />
      <AddItem list={list} setList={setList} />
    </div>
  )
}

export default HomePage