import { v4 as uuidv4 } from 'uuid';
import ListItem from './ListItem';

const ListContainer = ({ list, setList }) => {

  return (
    <>
      <div>ListContainer</div>
      <ul>
      {list.map(item =>
        <ListItem {...item} setList={setList} key={uuidv4()} />
      )}
      </ul>
    </>
    
  )
}

export default ListContainer