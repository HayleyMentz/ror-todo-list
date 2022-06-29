import { useState, useEffect } from 'react';

const ListForm = ({ addList, id, title, desc, updateList, setEdit}) => {
const [list, setList] = useState({ title: '', desc: '', })

const handleSubmit = (e) => {
e.preventDefault() // stop from reloading and losing data and stop putting the input into url
if (id) {
  updateList(id, list)

  setEdit(false)
} else {

addList(list)
}
setList({title: '', desc: '',})
}

// build out form of how it will look
// each field have own input (one input for title, one input for desc)
  return (

  <>
  <h1>{id ? "Edit" : "Create" } List </h1>
  <form onSubmit={handleSubmit}>
    <labe>Title:</labe>
<input
//need these 3 things
name='title' //what is input for
value={list.title} //where we are ftoring it
onChange={ (e) => setList({...list, title: e.target.value})} //how we are storing it
// e is event of typing in the input
required //make sure something to submit
placeholder='title' // text within the input box
/>
<textarea
name='desc'
value={list.desc}
onChange={ (e) => setList({...list, desc: e.target.value})}
></textarea>
<button type='submit'>{id? "Update" : "Submit" }</button>
  </form>
  </>
)

}

export default ListForm;
