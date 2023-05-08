import React from 'react'
import'./NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>

      <Link to='/'>
        <img class="loguito" src='../img/loguito.png' width="70"/>
      </Link>
        <nav>
            <ul>
              <li>
                <NavLink to={`/categoria/2`}>Sin Tacc</NavLink>
              </li>

              <li>
                <NavLink to={`/categoria/3`}>Vegano </NavLink>
              </li>

            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar

