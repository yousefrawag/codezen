import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
          <div className="contact_steps">

              <div className='step_parent'>
                    <span className='line'><span></span></span>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>

              </div>
                  
                <form className='form'>
                  <div className="group">
                        <input type="text" required className='input'  />
                        <span className='highlight'></span>
                        <span className='bar'></span>
                        <label>Name</label>
                  </div>
               


                </form>
          </div>
              
            
         
      
      </div>
    </div>
  )
}

export default Contact