import React from 'react';
import './Footer.css';
import Credit from './Credit'

const footer = () => {
    const firstFooter = [
        { title: "Home" },
        { title: "Medication" },
        { title: "Therapy" },
        { title: "Medication + Therapy" },
        { title: "Reviews" }
    ]

    const secondFooter = [
        { title: "About US" },
        { title: "Depression101" },
        { title: "Blog" },
        { title: "Careers" },
        { title: "Contact" },
        { title: "FAQ" },
        { title: "SITEMAP" }
    ]

    const thirdFooter = [
        { title: "TERMS OF USE" },
        { title: "PRIVACY" },
        { title: "NOTICE OF PRIVACY PRACTICES" },
        { title: "TELEHEALTH CONTENT" },
    ]
  return (
    <div>
<div className='footer'>
        <div className='footer-text'>
            <h1>Mindarch</h1>
            <p>If you are in a crisis or any other person may be in danger - don't use this site.
                 This resources can't provide you with immediate help</p>
        </div>

        <div>
        <ul className='firstFooter'>
        {
          firstFooter.map((item, idx) => {
              return (
                <li key={idx} className="firstFooter-item">
                    <a href={item.path}>
                        { item.title }
                    </a>
                </li>
              )
          })
      }
</ul>
        </div>

      <div className='second-footer'>
      <ul className='secondFooter'>
        {
          secondFooter.map((item, idx) => {
              return (
                <li key={idx} className="secondFooter-item">
                    <a href={item.path}>
                        { item.title }
                    </a>
                </li>
              )
          })
      }
</ul>
      </div>

      <div className='third-footer'>
      <ul className='thirdFooter'>
        {
          thirdFooter.map((item, idx) => {
              return (
                <li key={idx} className="thirdFooter-item">
                    <a href={item.path}>
                        { item.title }
                    </a>
                </li>
              )
          })
      }
</ul>

      </div>
    </div>

<Credit/>
    </div>
    
  )
}

export default footer;