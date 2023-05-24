import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';
import { Modal } from 'antd';

function Next() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

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
      <Modal open={!modalOpen}>
      <div
        style={{
          maxWidth: '500px',
          padding: '40px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#fff',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Form</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="title" style={{ color: 'grey', display: 'block' }}>
            Title:
          </label>
          <input type="text" id="title" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="headline" style={{ color: 'grey', display: 'block' }}>
            Headline:
          </label>
          <input type="text" id="headline" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="VideoCount" style={{ color: 'grey', display: 'block' }}>
            No of Videos:
          </label>
          <input type="number" id="VideoCount" min={0} style={{ marginLeft: '10px' }} />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/image">
            <button style={{ padding: '10px 20px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Course Thumbnail
            </button>
          </Link>
          <Link to="/video">
            <button style={{ padding: '10px 20px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
              Video Upload
            </button>
          </Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={openModal} style={{ padding: '10px 30px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </div>

        {/* Modal */}
        <Modal
        open={modalOpen}
          // isOpen={modalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              maxWidth: '400px',
              margin: '0 auto',
              padding: '20px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
            },
          }}
        >
          <h2>Thank You!</h2>
          <p>Your form has been submitted successfully.</p>
          <button onClick={closeModal} style={{ padding: '10px 20px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '20px' }}>
            Close
          </button>
        </Modal>
      </div>
      </Modal>
    </div>
  );
}

export default Next;
