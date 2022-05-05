import React from 'react'
import './Button.css'
const Button = ({text, color}) => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div>
        <button onClick = {handleClick}
    style={{backgroundColor: color}} 
     >
      {text}
     
     </button>
    </div>
  )
}

export default Button



