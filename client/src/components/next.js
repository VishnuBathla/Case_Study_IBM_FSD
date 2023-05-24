import React, { useState } from 'react';
import { Modal } from 'antd';
import First from './course_1'
function Next({setModalOpen}) {
  const [course_data,setCourse]=useState({
    "title":"",
    "headline":"",
    no_of_videos:0,
    uploaded_on:new Date(),
    thumbnail:"",
    videos:[
    ]
  })
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Modal open
      footer={null}>
      <First setter={setCourse}/>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={closeModal} style={{ padding: '10px 30px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Next;
