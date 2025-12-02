import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <div className='nav-bar'>
      <nav>
        <Link to='/' className='home-link'>
          <h1>Event Manager</h1>
        </Link>
        <SearchBar />
        <Link to='/create' className='create-link'>
          Create Event
        </Link>
      </nav>
    </div>
  )
}

export default NavBar;
