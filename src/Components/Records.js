import React from 'react'
import './Records.css'
import { useState } from 'react'
import { useEffect } from 'react'

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count <= 3000){
    setTimeout(() => {  
      setCount(() => Math.round(Math.random() * 10000));
    }, 2000);
  }
  });

  

  return (
    <div className='record-wrapper'>
        {
            Record.map((items,idx) => {
              return (
                <div className='record' key={idx} >
                  <h2 className='num'>{count}</h2>
                    
                <p>{items.text}</p>
                
                </div>

              )

            })
          }


    </div>
  )
}

export default Records