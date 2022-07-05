import React from 'react';
// import Button from './Button'

import './showcase.css'

const showcaseText =[
  {
    id:"01",
    header: "Take our free mental health evaluation",
    text: "Answer a short set of clinically proven questions to help us understand your symptom and recommend a personalized treatment plan",
  },

  {
    id: "02",
    header: "Meet your expert provider",
    text: "Whether you choose ,medication, therapy or both, get an appointment within 48 hours for a comprehensive evaluation and personalized treatment plan",
  },

  {
    id: "03",
    header: "Get your medication match delivered to your door",
    text: "If prescribed your provider will use precisionRx tool to match you with the right antidepressant, and them we'll deliver to your door",
  },
  
  {
    id: "04",
    header: "Stay connected and make progress",
    text: "Get unlimited access to your provider through messaging, live video sessions and check-ins, you'll work together to track your progress,make adjustments and reach your goals.",
  },

]


const Showcase = () => {
  return (
    <div className='showcase'>
     <div className='showcase-text'>
     {
            showcaseText.map((items,idx) => {
              return (
                <div key={idx} >
                  <h2>{items.id}</h2>
                <h2> {items.header}</h2>
                <p>{items.text}</p>
                </div>

              )

            })
          }

      </div>

      {/* <div className='showcase image'>
      <img 
        src= {  } alt= "logo"
        />
      </div> */}


      
       
          {/* <Button color={'yellowgreen'}  text={'Take Assesment'} /> */}
    </div>
    
  )
}

export default Showcase