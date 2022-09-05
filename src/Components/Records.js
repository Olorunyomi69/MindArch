import React from 'react'
import './Records.css'

const Record = [
    {
      number: '2260',
      text: 'Events',
    },
    {
        number: '1324',
        text: 'Satisfied Clients',
    },
    {
        number: '3453',
        text: 'Sponsored',
    },
    {
        number: '9786',
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
                  <h2>{items.number}</h2>
                <p>{items.text}</p>
                </div>

              )

            })
          }


    </div>
  )
}

export default Records