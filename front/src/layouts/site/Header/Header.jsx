import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import MainContext from '../../../context/context'

const Header = () => {
  const{basketItems}=useContext(MainContext)

  return (
    <header>
        <div className="header__left">
            <Link to='/'>Tasty</Link>
        </div>
        <div className="header__right">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='#'>Menu</Link></li>
                <li><Link to='#'>Specialties</Link></li>
                <li><Link to='#'>Reservation</Link></li>
                <li><Link to='#'>Blog</Link></li>
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>Contact</Link></li>
            </ul>
            <Link to='/basket'><i class="fa-solid fa-cart-shopping"></i><sup>{basketItems.length}</sup></Link>
        </div>
    </header>
  )
}

export default Header
