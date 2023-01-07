import React from 'react';
// import Button from './Button'
import woman from '../Images/showcase1.png'
import pills from '../Images/pills.png'
import expert from '../Images/expert.png'
import connect from '../Images/connect.png'
import './showcase.css'

const showcaseText =[
  {
    id:"01",
    header: "Take our free mental health evaluation",
    text: "Answer a short set of clinically proven questions to help us understand your symptom and recommend a personalized treatment plan",
    invert: true,
    image:woman,
  },

  {
    id: "02",
    header: "Meet your expert provider",
    text: "Whether you choose ,medication, therapy or both, get an appointment within 48 hours for a comprehensive evaluation and personalized treatment plan",
    invert: false,
     image:expert,
  },

  {
    id: "03",
    header: "Get your medication match delivered to your door",
    text: "If prescribed your provider will use precisionRx tool to match you with the right antidepressant, and them we'll deliver to your door",
    invert: true,
    image:pills,
  },
  
  {
    id: "04",
    header: "Stay connected and make progress",
    text: "Get unlimited access to your provider through messaging, live video sessions and check-ins, you'll work together to track your progress,make adjustments and reach your goals.",
    invert: false,
    image:connect,
  },

]


const Showcase = () => {
  return (
    <div className='section' id="services">
      <h1>Getting started is simple</h1>
      <div className='showcase'>
      <div className='showcase-text'>
     {
            showcaseText.map((items,idx) => {
              return (
                <div   style={{display: 'flex', flexDirection: items.invert ? 'row' : 'row-reverse',marginBottom:'70px', gap :'80px'}} key={idx} >
                  <div  style={{textAlign: items.invert ? 'end' : 'start',  width:'300px'}}>
                  <h2 >{items.id}</h2>
                <h2 style={{fontSize:'25px'}}> {items.header}</h2>
                <p style={{fontSize:'15px'}}>{items.text}</p>
                </div>

                <div>
                <img  style= {{width: '200px', heigth: '200px', borderRadius: '100px', marginLeft:'' }}src={items.image} alt='placeholder'/>
                </div>
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


      </div>
    
    
  )
}

export default Showcase