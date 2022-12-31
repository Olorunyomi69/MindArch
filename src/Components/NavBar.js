import React from 'react';
import './Navbar.css';


const navBar = () => {
  const Navigation = [
    { title: "Mindarch"},
    { title: "Home" },
    { title: "About Us" },
    { title: "Services" },
    { title: "Cases" }
  ]
  
  return (
    <div className='Navbar'>
      <ul className='main-nav'>
      {
          Navigation.map((item, idx) => {
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
  )
}

export default navBar