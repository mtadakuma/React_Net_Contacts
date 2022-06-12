import React from 'react'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png'
const NavBar = () => {
  return (
    <div className='nav'>
            <li><Link to={'/'}>{ <img src={logo} alt='logo' className='nav-logo'/>}</Link></li>
            <ul className='nav-menu'>
                <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                <li><NavLink to={'/create'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Agregar Contacto</NavLink></li>
            </ul>
    </div>
  )
}

export default NavBar