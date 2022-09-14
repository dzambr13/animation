import { Link } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className='navbar borderXwidth'>
      <Link to="/"> 🏠 </Link>
      <br></br>
      <br></br>
      <h4> welcome to aniMATE! </h4>
      <Link to='/categories'>Categories</Link>
      <div className='dot'></div>
    </nav>
  )
}

export default Nav