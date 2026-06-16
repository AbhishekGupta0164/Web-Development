import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
// npm i react-router-dom
const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to={"/"}>   
            <li>Home</li>
            </Link>
            <Link to={'/about'}>  
            <li>About</li>
            </Link>
            <li>Task</li>

        </nav>
    </div>
  )
}

export default NavBar




// npm i react-router-dom 