import List from './List';

const AllList = ({ lists, updateList, deleteList }) => (
  <>
  <h1>All Lists</h1>
  {
    lists.map( l =>
      <List
      key={l.id}
      {...l}
      updateList={updateList}
      deleteListe={deleteList}
      />
      )
  }
  </>
)

export default AllList;