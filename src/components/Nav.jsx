import { NavStyle } from "../css/NavStyle"
import {Link} from 'react-router-dom'


function Nav() {

  return (
    <>
    <NavStyle>
        <section className="nav-container">
            <h1>Musicaly</h1>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/musicas" className="navLink">Musicas</Link>
            <Link to="/login" className="navLink">Login</Link>
        </section>
    </NavStyle>
    </>
  )
}

export default Nav
