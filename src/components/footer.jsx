import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className='absolute bg-transparent bottom-0 z-1'>
        <ul className='list-none flex justify-start items-center text-left text-white space-x-10 ml-20 mb-5'>
            <li><FontAwesomeIcon icon={faFacebook} size='2x' className='hover:text-blue-500 hover:cursor-pointer
                transition duration-300 hover:animate-bounce'/></li>
            <li><FontAwesomeIcon icon={faInstagram} size='2x' className='hover:text-pink-400 hover:cursor-pointer
                transition duration-300 hover:animate-bounce'/></li>
            <li><FontAwesomeIcon icon={faTwitter} size='2x' className='hover:text-blue-300 hover:cursor-pointer 
                transition duration-300 hover:animate-bounce'/></li>
            <li><FontAwesomeIcon icon={faLinkedin} size='2x' className='hover:text-blue-800 hover:cursor-pointer
                transition duration-300 hover:animate-bounce'/></li>
        </ul>
    </footer>
  )
}

export default Footer