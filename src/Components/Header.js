import React from 'react'
import './Header.css'
import Button from './Button'

const Header = () => {
  const navBar = [
    { title: "Features" },
    { title: "Pricing" },
    { title: "About" },
    { title: "Contact Us" }
]
  return (
    <div className='header'>
    <div className='Navbar'>
        <ul className='main-nav'>

        {
          navBar.map((item, idx) => {
              return (
                <li key={idx} className="nav-item">
                    <a href={item.path}>
                        { item.title }
                    </a>
                </li>
              )
          })
      }
          
            <li><button style={{backgroundColor: "darkOlivegreen"}}>LogIn</button></li>
        </ul>
        
    </div>

      <div className='cover'>
        <h1 className='header'> <span> ~THE BEST~ </span>Digital Marketing</h1>
        <p>Completely synergize resource taxing relationships via premier<br/> niche market. Professionally cultivate one to one customer</p>
        <div className='Button'>
        <Button color={'yellowgreen'}  text={'Get Started'} />
        
        </div>
        
      </div>







    </div>
  )
}

export default Header







