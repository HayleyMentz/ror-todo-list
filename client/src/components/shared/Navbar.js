import { Link } from 'react-router-dom';

const Navbar = () => (

  <>
  <Link to='/'>
  <h1>
TodoList
  </h1>
  </Link>
  <ul>
    <Link to='/'>
      <li>Home</li>
    </Link>
  </ul>
  <ul>
    <Link to='/about'>
      <li>About</li>
    </Link>
  </ul>
  <ul>
    <Link to='/list'>
      <li>List</li>
    </Link>
  </ul>
  </>
)

export default Navbar;