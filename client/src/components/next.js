import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

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
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
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
          <label htmlFor="prefix" style={{ color: 'grey', display: 'block' }}>
            Prefix:
          </label>
          <input type="text" id="prefix" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="firstName" style={{ color: 'grey', display: 'block' }}>
            First Name:
          </label>
          <input type="text" id="firstName" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="middleName" style={{ color: 'grey', display: 'block' }}>
            Middle Name:
          </label>
          <input type="text" id="middleName" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="lastName" style={{ color: 'grey', display: 'block' }}>
            Last Name:
          </label>
          <input type="text" id="lastName" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="designation" style={{ color: 'grey', display: 'block' }}>
            Designation:
          </label>
          <input type="text" id="designation" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="phoneNo" style={{ color: 'grey', display: 'block' }}>
            Phone No:
          </label>
          <input type="text" id="phoneNo" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ color: 'grey', display: 'block' }}>
            Email:
          </label>
          <input type="text" id="email" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="bio" style={{ color: 'grey', display: 'block' }}>
            Bio:
          </label>
          <input type="text" id="bio" style={{ marginLeft: '10px' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/image">
            <button style={{ padding: '10px 20px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Image Upload
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
          isOpen={modalOpen}
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
    </div>
  );
}

export default Next;
