import React from 'react';
import ReactPlayer from 'react-player';
import Header from './Header';

const VideoPlayer = () => {
  const videoUrl = "https://www.youtube.com/watch?v=yn6vFCRkC3c&ab_channel=WebDevSimplified";
  const watermarkText = "Watermark";
  const thumbnail = "https://www.freecodecamp.org/news/content/images/2022/03/photo-1619410283995-43d9134e7656.jpeg";

  return (
    <>
      <Header />
      <div style={{ position: 'relative', margin: 'auto', width: '50%', height: '50vh' }}>
        <ReactPlayer
          url={videoUrl}
          controls
          width='100%'
          height='100%'
          light={thumbnail}
        />
        <div
          style={{
            position: 'absolute',
            top: '80%',
            left: '84%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            zIndex: '1',
          }}
        >
          {watermarkText}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
