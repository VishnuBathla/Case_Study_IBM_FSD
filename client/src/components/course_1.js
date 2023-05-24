import { Modal } from "antd"
import { useState } from "react"
import VideoElement from "./video_element"

const First=()=>{
    const [load,loader]=useState(false)
    return (
        <div
        style={{
          maxWidth: '500px',
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
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="headline" style={{ color: 'grey', display: 'block' }}>
            Course Thumbnail:
          </label>
          <input type="text" id="course_thumbnail" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ padding: '10px 20px', borderRadius: '4px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer', marginLeft: '10px' }} onClick={()=>{loader(true)}}>
              Video Upload
            </button>
        <Modal open={load}
        footer={null}>
            <VideoElement cur_video={{
                Title:"",Description:"",Thumbnail:""
            }} number={0} navigate={()=>{}} isLast={false} changeData={()=>{}} finish={()=>{}}/>
        </Modal>
        </div>
        </div>
    )
}
export default First