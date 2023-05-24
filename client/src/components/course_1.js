import { Modal } from "antd";
import { useState } from "react";
import VideoElement from "./video_element";

const First = () => {
  const [load, loader] = useState(false);

  return (
    <div
      style={{
        maxWidth: '500px',
        backgroundColor: '#fff',
        margin: '0 auto', // Center the container horizontally
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontWeight: 'bold' }}>Form</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="title" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }}>
          Title:
        </label>
        <input type="text" id="title" style={{ marginLeft: '10px', width: '94%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="headline" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }}>
          Headline:
        </label>
        <input type="text" id="headline" style={{ marginLeft: '10px', width: '94%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="VideoCount" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }}>
          No of Videos:
        </label>
        <input type="number" id="VideoCount" min={0} style={{ marginLeft: '10px', width: '94%' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="headline" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }}>
          Course Thumbnail:
        </label>
        <input type="text" id="course_thumbnail" style={{ marginLeft: '10px', width: '94%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            background: '#333',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '200px',
          }}
          onClick={() => { loader(true) }}
        >
          Video Upload
        </button>
      </div>
      <Modal open={load} footer={null} centered>
        <VideoElement
          cur_video={{
            Title: "",
            Description: "",
            Thumbnail: ""
          }}
          number={0}
          navigate={() => { }}
          isLast={false}
          changeData={() => { }}
          finish={() => { }}
        />
      </Modal>
    </div>
  );
};

export default First;
