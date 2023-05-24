import { Modal } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Edit_Profile() {
  return (
    <div>
        <div>
            <Modal open>
        <span>Prefix</span>
            <input type="text" id='Prefix' />
            <br/>
            <br/>
            <span>First Name</span>
            <input type="text" id='First Name' />
            <br/>
            <br/>
            <span>Middle Name</span>
            <input type="text" id='Middle Name' />
            <br/>
            <br/>
            <span>Last Name</span>
            <input type="text" id='Last Name' />
            <br/>
            <br/>
            <span>Designation</span>
            <input type="text" id='Designation' />
            <br/>
            <br/>
            <span>Phone no.</span>
            <input type="text" id='Phone no.' />
            <br/>
            <br/>
            <span>Email</span>
            <input type="text" id='Email' />
            <br/>
            <br/>
            <span>Bio</span>
            <input type="text" id='Bio' />
            <br/>
            <br/>
            <div>
     <Link to ='/image'> <button>Image Upload</button></Link>
      </div>
      </Modal>
        </div>
      
    </div>
  )
}

export default Edit_Profile