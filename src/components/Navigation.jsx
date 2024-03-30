import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='container'>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>

        <ul>
          <Link to="/change-color">Color Game</Link>
          <Link to="/toggle-show-hide">Toggle Show</Link>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>login</button>
    </nav>
  )
}

export default Navigation