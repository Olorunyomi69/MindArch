import React from 'react'
import './Records.css'
const event =() =>{
  return(Math.round(Math.random() * 10000));
}
const Record = [
    {
      text: 'Events',
    },
    {
        text: 'Satisfied Clients',
    },
    {
        text: 'Sponsored',
    },
    {
        text: 'Outreach',
    }
  ]
  
const Records = () => {
  return (
    <div className='record-wrapper'>
        {
            Record.map((items,idx) => {
              return (
                <div className='record' key={idx} >
                  <h2>{event()}</h2>
                <p>{items.text}</p>
                
                </div>

              )

            })
          }


    </div>
  )
}

export default Records