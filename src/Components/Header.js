import React from 'react'
import './Header.css'
import Button from './Button'

const Header = () => {
  
  return (
    <div className='header'>
    <div className='Navbar'>
        <ul className='main-nav'>
            <li><a href='www.google.com'>Home</a></li>
            <li><a href='www.google.com'>Features</a></li>
            <li><a href='www.google.com'>Offers</a></li>
            <li><a href='www.google.com'>LogIn</a></li>
            <li><a href='www.google.com'>Carts</a></li>
            <li><button>SignUp</button></li>
        </ul>
        
    </div>

      <div className='cover'>
        <h1> Art is Beautiful, Art is Life, <br/> Buy Arts.</h1>
        <p>Browse our collection to find the masterpiece that you desire or<br/> join us today to start selling.</p>
        <div className='Button'>
        <Button color={'DarkGoldenrod'}  text={'Explore Artworks'} />
        <Button color={'white'}  text={'Start Selling'} />
        </div>
        
      </div>







    </div>
  )
}

export default Header