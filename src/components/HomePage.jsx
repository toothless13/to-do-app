import { useState } from "react"
import AddItem from "./AddItem"
import ListContainer from "./ListContainer"

const HomePage = () => {

  const [list, setList] = useState([]);

  return (
    <div className="w-4/5 md:w-3/4 lg:w-1/3 mx-auto text-center rounded-lg border-2 border-zinc-300 my-5 p-2">
      <ListContainer list={list} setList={setList} />
      <AddItem list={list} setList={setList} />
    </div>
  )
}

export default HomePage