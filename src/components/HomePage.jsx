import { useState } from "react"
import AddItem from "./AddItem"
import ListContainer from "./ListContainer"

const HomePage = () => {

  const initialState = {
    list: [
      {
        item: "test 1"
      },
      {
        item: "test 2"
      },
      {
        item: "test 3"
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