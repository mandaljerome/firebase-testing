import React from 'react'
import './Header.scss'
import logo from '../assets/logo.png'

const Header = () => {
   return (
      <div className='header'>
         <div className='container'>
            <img src={logo}></img>
            <h1> Firebase Testing App</h1>
         </div>
      </div>
   )
}

export default Header
