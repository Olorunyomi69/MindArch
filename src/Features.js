import React from 'react';
import './Features.css'

const features = () => {
  const details = [
    {
      title: "Content Creation",
      description: ""
    },
    {
      title: "Content Strategy",
    description: "All our content marketing service packages include a content strategy"
    },
    {
      title: "Content Development",
    description: "we have created a full statck working structure for our workflow",
    },
    {
      title: "Content Optimization",
    description: "we have created a full statck working structure for our workflow",
    }
    
  ]

  return (
    <div className='features'>
        <div className='feature-header'>
            <h1>We're a Strategic Digital Marketing Agency</h1>
            <p>we've created a full-stack structure for our working workflow 
              processes which are created by our experts with hand-full of experience</p>
        </div>

        <div className='feature-cards'>
          {
            details.map((items) => {
              return (
                <div className='cards'>
                  <h3>
                    {items.title}
                </h3>
                <p>{items.description}</p>
                  </div>
              )
              
            })
          }
        </div>

    </div>
  )
}

export default features

