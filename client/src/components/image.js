import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Perform submit logic or API calls here

    // Show modal for successful image upload
    setShowModal(true);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '80%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    marginBottom: '20px',
  };

  const imageContainerStyle = {
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '300px',
    marginTop: '20px',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    zIndex: '999',
  };

  const modalButtonStyle = {
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Image Uploader</h2>
      <input type="file" onChange={handleImageUpload} style={inputStyle} />
      {selectedImage && (
        <div style={imageContainerStyle}>
          <h3>Selected Image</h3>
          <img src={selectedImage} alt="Selected" style={imageStyle} />
        </div>
      )}
      <div>
        <button onClick={handleSubmit} style={modalButtonStyle}>
          Submit
        </button>
      </div>

      {showModal && (
        <div style={modalStyle}>
          <h3>Image Uploaded Successfully!</h3>
          <button onClick={handleModalClose} style={modalButtonStyle}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
