import React from 'react'
// import './About.scss'
import Member from './Member.jsx'
import BreadCrumb from '../breadCrumb/BreadCrumb.js'
const About = () => {
  return (
    <div className='about'>
    <BreadCrumb title = {"About"} />
        <div className="container">
              <div className="row">
                    <div className="col-6">
                        <div className="image">image</div>

                    
                    </div>
               <div className="col-6">
                        <div className="text">text</div>
                        
                    
                    </div>
              </div>
     
              <Member />
        </div>
    
    </div>
  )
}

export default About