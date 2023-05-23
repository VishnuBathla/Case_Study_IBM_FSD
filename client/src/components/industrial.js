import React from 'react'
import { Link } from 'react-router-dom'

function industrial() {
  return (
    <div>
        <div className='des'>
        <div className='abc'>
        <span className='xyz'>Course Description</span>
            <input type="text" id='Course Description' />
            <br/>
            <Link to = '/next'> <button>Upload course</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default industrial