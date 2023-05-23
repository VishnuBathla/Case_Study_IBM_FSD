import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleAddVideo = () => {
    setVideos([...videos, videoUrl]);
    setVideoUrl('');
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Perform submit logic or API calls here

    // Show modal for successful video upload
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
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    marginBottom: '20px',
  };

  const iframeStyle = {
    width: '560px',
    height: '315px',
    border: 'none',
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

  return (
    <div style={containerStyle}>
      <h2>Video List</h2>
      <input
        type="text"
        value={videoUrl}
        onChange={handleVideoUrlChange}
        style={inputStyle}
        placeholder="Enter video URL"
      />
      <button onClick={handleAddVideo} style={buttonStyle}>
        Add Video
      </button>
      <ul style={listStyle}>
        {videos.map((video, index) => (
          <li key={index} style={listItemStyle}>
            <iframe
              title={`Video ${index + 1}`}
              src={video}
              style={iframeStyle}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleSubmit} style={buttonStyle}>
          Submit
        </button>
      </div>

      {showModal && (
        <div style={modalStyle}>
          <h3>Video Uploaded Successfully!</h3>
          <button onClick={handleModalClose} style={buttonStyle}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoList;
