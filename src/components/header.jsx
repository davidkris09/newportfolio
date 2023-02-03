import React from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'

function Header() {
  const location = useLocation();

  return (
    <header className='h-12 absolute bg-transparent w-screen z-50'>
      <ul className='w-full list-none flex justify-start items-center text-left space-x-20 text-lg ml-20 pt-5 text-white'>
          <li className={location.pathname === '/' ? 'text-gray-500/75' : ''}>
            <Link to='/'>Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'text-gray-500/75' : ''}>
            <Link to='/about'>About</Link>
          </li>
          <li className={location.pathname === '/skills' ? 'text-gray-500/75' : ''}>
            <Link to='/skills'>Skills</Link>
          </li>
          <li className={location.pathname === '/portfolios' ? 'text-gray-500/75' : ''}>
            <Link to='/portfolios'>Portfolios</Link>
          </li>
      </ul>
    </header>
  )
}

export default Header