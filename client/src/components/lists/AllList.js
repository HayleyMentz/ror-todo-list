import List from './List';

const AllList = ({ lists, updateList, deleteList }) => (
  <>
  <h1>All Lists</h1>
  {
    lists.map( l =>
      <List
      key={l.id}
      {...l} // => cleans up code looping threw all elements  like l.title, l.id, l.desc 
      updateList={updateList}
      deleteListe={deleteList}
      />
      )
  }
  </>
)

export default AllList;