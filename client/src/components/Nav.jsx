import { Link } from 'react-router-dom'

const Nav = () => {

  return(
    <nav className='navbar'>
      <Link to="/"> 🏠 </Link>
      <br></br>
      <br></br>
      <h4> aniMATE! </h4>
      <br></br>
      <br></br>
      <Link className="shows" to='/categories'>Shows</Link>
    </nav>
  )
}

export default Nav