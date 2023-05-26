import React, { useState } from 'react';
import { Modal } from 'antd';
import First from './course_1';

function Next({ setModalOpen }) {
  const [course_data, setCourse] = useState({
    title: '',
    headline: '',
    no_of_videos: 0,
    uploaded_on: new Date(),
    thumbnail: '',
    videos: []
  });
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Modal open footer={null} centered>
        <div style={{ backgroundColor: '#f8f8f8', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Course Details</h2>
          <First setter={setCourse} setModalOpen={setModalOpen} />
        </div>
      </Modal>
    </div>
  );
}

export default Next;
