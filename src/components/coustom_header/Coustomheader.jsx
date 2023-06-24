import React from 'react'
import './coustom.scss'
const Coustomheader = (props) => {
    const {title} = props
  return (
    <React.Fragment>
    <h3 className='coustom_headr'>
      {
        title
      }
     
    </h3>
    <span className='span'></span>
    </React.Fragment>
  )
}

export default Coustomheader
