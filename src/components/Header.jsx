import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import './Header.scss'

function Header() {
  return (
    <header>
      <a className="logo" href="/">
        <Logo />
      </a>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header