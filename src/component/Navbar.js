import React from 'react'
import { Link } from 'react-router-dom'
import Languageoption from './language-dropdown'
import i18next from "i18next"

function Navbar() {
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value)
  }

  return (

    <div>
      <div className="header"><h2>User Dashboard </h2>
        <ul className="nav">
          <li><Link className="item1" to="/">HOME </Link></li>
          <li><Link className="item1" to="/calendar"> CALENDAR</Link></li>

          <li className="langauge"><Languageoption onChange={(e) => handleClick(e)} /></li>
        </ul>
      </div>

    </div>


  )
}

export default Navbar
