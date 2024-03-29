import React from 'react';
import ReactPlayer from 'react-player';
import Header from './Header';

const VideoPlayer = () => {
  const videoUrl = "https://www.youtube.com/watch?v=yn6vFCRkC3c&ab_channel=WebDevSimplified";
  const watermarkText = "Watermark";
  const thumbnail = "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQi0PXm1cJpbCDdhphTRS6kPdGeK8Y9sii0xPBktpr7_8GKLh2E_sv81dbx8SJEayIpZvNz2gspP6A33oE";

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
            backgroundColor: 'black',
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
