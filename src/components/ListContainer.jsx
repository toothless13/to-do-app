import ListItem from './ListItem';

const ListContainer = ({ list, setList }) => {

  const handleComplete = (id) => {
    // e.preventDefault();
    // console.log(e.target.style.textDecoration);
    // if (e.target.style.textDecoration === "line-through") {
    //   e.target.style.textDecoration = "none";
    // } else {
    //   e.target.style.textDecoration = "line-through";
    // }
    const updatedList = list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setList(updatedList);
  }

  const handleUpdate = (id, todo) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        item.todo = todo;
      }

      return item;
    });

    setList(updatedList);
  }

  const handleDelete = (id) => {
    const updatedList = list.filter(item => item.id !== id);

    setList(updatedList);
  }

  return (
    <div className="">
      <ul>
        {/* {console.log(list)} */}
      {list.map(item =>
        <ListItem {...item} setList={setList} key={item.id} handleComplete={handleComplete} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
      )}
      </ul>
    </div>
    
  )
}

export default ListContainer