import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="header__left">
            <Link to='/'>Tasty</Link>
        </div>
        <div className="header__right">
            <ul>
                <li><Link to='/admin'>Dashboard</Link></li>
                <li><Link to='products'>Products</Link></li>
                <li><Link to='add'>Add</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header
