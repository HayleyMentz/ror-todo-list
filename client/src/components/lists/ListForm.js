import { useState } from 'reacr';

const ListForm = ({}) => {
const [list, setList] = useState({ title: '', desc: '', })

const handleSubmit = (e) => {
e.preventDefault() // stop from reloading and losing data and stop putting the input into url
addList(list)

setList({title: '', desc: '',})
}

// build out form of how it will look
// each field have own input (one input for title, one input for desc)
  return (

  <>
  <form onSubmit={handleSubmit}>
    <labe>title:</labe>
<input
//need these 3 things
name='title' //what is input for
value={list.title} //where we are ftoring it
onChange={ (e) => setList({...list, title; e.target.value})} //how we are storing it
// e is event of typing in the input
required //make sure something to submit
placeholder='title' // text within the input box
/>
<textarea
name='desc'
value={list.desc}
onChange={ (e) => setList({...list, desc: e.target.value})}
required


></textarea>
<button type='submit'>Submit</button>
  </form>
  </>
)

}

export default ListForm;
