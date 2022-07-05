import React from 'react'

import Button from './Button'

const Header = () => {
  const navBar = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Services" },
    { title: "Cases" },
    { title: "News" }
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
          
            <li><button style={{backgroundColor: "tomato"}}>Sign Up</button></li>
        </ul>
        
    </div>

      <div className='cover'>
        <h2 className='header'><span>Perfect solution for your mind</span>Find A Therapist </h2>
        <p>It's your life to live.Lets work together to help you find out who you are and what
          <br/> matters to you as an individual</p>

        <div className='Button'>
        <Button color={'green'}  text={'Make an Appointment'} />
        
        </div>
        
      </div>







    </div>
  )
}

export default Header







