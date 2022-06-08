import React from 'react';
import Button from './Button'
import DMI from './Digital-Marketing.png'
import './showcase.css'


const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase image'>
      <img 
        src= { DMI } alt= "logo"
        />
      </div>

      <div className='showcase-text'>
          <h3>Increase Business On Social Media Reach</h3>
          <p>Using our network for your service, we will help <br/> you promote your Business</p>
          <Button color={'yellowgreen'}  text={'Get Started'} />
      </div>
       
    </div>
    
  )
}

export default Showcase