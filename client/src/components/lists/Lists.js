import { useState, useEffect} from 'react';
import axios from 'axios';
import ListForm from './ListForm';
import AllList from './AllList';



const Lists = () => {
  const [lists, setLists] = useState([])


// useEffect= run code before shown on screen
useEffect( () => {
  axios.get('/api/lists')
  .then(res => { setLists(res.data)}) //grab all list from database and store within out state (storage)
  .catch( err => console.log(err))
}, [])

// Add Action (Creating a list)

const AddList = (list) => {
  //run the create action wihin controller
  // { list: 'Grocery'}
  axios.post('/api/lists', { list})
.then ( res => {
  setLists([...lists, res.data])
})
.catch( err => console.log(err))
}

const updateList = (id, list) => {
axios.put(`/api/lists/${id}`, {list})
.then( res => {
  let newUpdatedLists = lists.mao( l => {
    if (l.id === id) {
      return res.data
    }
    return l
  })
  setLists(newUpdatedLists)
})
.catch(err => console.log(err))
}
const deleteList = (id) => {
  axios.delete(`/api/lists/${id}`)
  .then( res => {
    setLists( lists.filter( l => l.id !==id ))
    alert(res.data.message)
  })
  .catch( err => console.log(err))
}

return (
<>
<ListForm addList={addList} />
<AllList
lists={lists}
updateList={updateList}
deleteList={deleteList}
/>

</>
)
}
export default Lists;