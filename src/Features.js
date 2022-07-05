import React from 'react';
import './Features.css'

const features = () => {
  const details = [
    {
      title: "Quick Assessment",
      description: "Complete our 60-seconds online assesment"
    },
    {
      title: "Get matched",
    description: "Connect with a therapist that fits your need"
    },
    {
      title: "Start therapy",
    description: "Message your therapist and begin your journey today!",
    },

 
  ]

  const about = [
    {
      header: "Therapy for how we live today",
      text: "Mindarch is an online therapy platform that provides users the confidential support of a licensed therapist through an easy to use HIPAA-complaint app"
    },
    {
      header: "Our Goal",
      text: "We aim to improve your mental health in the most convenient and affordable way! You'll get matched woth a licensed therapist in your state from the comfort of your device, and receive ongoing support via messaging and live video sessions"
    }
  ]

  return (
    <div className='features'>

        <div className='feature-cards'>
          {
            details.map((items,idx) => {
              return (
                <div key= {idx}className='cards'>
                  <h3>
                    {items.title}
                </h3>
                <p>{items.description}</p>
                  </div>
              )
              
            })
          }
        </div>



        <div className='feature-text'>
          {
            about.map((items,idx) => {
              return (
                <div key={idx} >
                <h1> {items.header}</h1>
                <p>{items.text}</p>
                </div>

              )

            })
          }
          
        </div>
       

    </div>
  )
}

export default features

