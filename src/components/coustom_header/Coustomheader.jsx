import React from 'react'
import './coustom.scss'
const Coustomheader = (props) => {
    const {title} = props
  return (
    <h3 className='coustom_headr'>
      {
        title
      }
      <span className='span'></span>
    </h3>
  )
}

export default Coustomheader
