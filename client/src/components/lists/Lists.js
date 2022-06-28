import { useState, useEffect  } from 'react';
import axios from 'axios';
import ListForm from './ListForm';


const Lists = () => (
const {lists, setLists} = useState([])


// useEffect= run code before shown on screen
useEffect( () => {
  axios.get('/api/lists')
  .then(res => setLists(res.data)) //grab all list from database and store within out state (storage)
  .catch( err => console.log(err))
}), [])

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

return (
<>
<ListForm addList={addList} />

</>
)
export default Lists;