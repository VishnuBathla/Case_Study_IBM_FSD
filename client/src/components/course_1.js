import { Modal } from "antd";
import { useState } from "react";
import VideoElement from "./video_element";

const First = ({setter,setModalOpen}) => {
  const [load, loader] = useState(false);
  const [title,setTitle] = useState("")
  const [headline,setheadline] = useState("")
  const [video_Count,setVideoCount]=useState(0)
  const [course_thumbnail,setc_t]=useState("")
  const [videos,setVideo]=useState([])
  const [cur_vid_no,set_cur_vid_no]=useState(-1)
  const [error,seterrors]=useState({})
  const ErrorChecker = () => {
    const newErrors = {};

    if (title.trim() === '') {
      newErrors.title = 'Title is required';
    }

    if (headline.trim() === '') {
      newErrors.headline = 'Headline is required';
    }

    if (video_Count <= 0) {
      newErrors.videoCount = 'Video Count must be greater than 0';
    }

    if (course_thumbnail.trim() === '') {
      newErrors.thumbnail = 'Course Thumbnail is required';
    }
    if(videos.length !==video_Count){
      newErrors.video = 'Upload Videos';
    }

    return newErrors;
  };
  const UploadHandler = ()=>{
    // console.log("hi")
    const err = ErrorChecker()
    if(JSON.stringify(err)==='{}'){
      console.log('hi')
      setModalOpen(false)
      setTitle("")
      setheadline("")
      setVideoCount(0)
      setc_t("")
      setVideo([])
      set_cur_vid_no(-1)
    }
    else{
      seterrors(err)
    }
    

  }
  const handler = (e)=>{
    if(e.target.id==="title"){
      setTitle(e.target.value)
    }else if(e.target.id==="headline"){
      setheadline(e.target.value)
    }else if(e.target.id==="VideoCount"){
      setVideoCount(+e.target.value)
    }else if(e.target.id==="course_thumbnail"){
      setc_t(e.target.value)
    }
  }
  const VideoHandler=()=>{
    if(video_Count>0){
    setVideo(Array.from({ length: video_Count }, () => ({
      title: "",
      description: "",
      thumbnail: "",
      videoLink:""
    })))
    set_cur_vid_no(0)
    loader(true)}
    else{
      seterrors({videoCount : 'Video Count must be greater than 0'
    })
    }
  }
  const changeData = (idx,data)=>{
    // console.log(idx,data)
    console.log(videos.map((vid,id)=> id===idx?data:vid))
    setVideo(videos.map((vid,id)=> id===idx?data:vid))
  }
  const navigateHelper = (type)=>{
    if(type==="incr"){
      set_cur_vid_no(cur_vid_no+1)
    }
    if(type==="decr"){
      set_cur_vid_no(cur_vid_no-1)

    }
  }
  const Finish = ()=>{
    loader(false)
  }
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
        <input type="text" id="title" style={{ marginLeft: '10px', width: '94%' }} onChange={handler} />
        {error.title && <span style={{color: 'red',marginLeft: '10px'}}>{error.title}</span>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="headline" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }} >
          Headline:
        </label>
        <input type="text" id="headline" style={{ marginLeft: '10px', width: '94%' }} onChange={handler}/>
        {error.headline && <span style={{color: 'red',marginLeft: '10px'}}>{error.headline}</span>}

      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="VideoCount" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }}>
          No of Videos:
        </label>
        <input type="number" id="VideoCount" min={0} style={{ marginLeft: '10px', width: '94%' }} onChange={handler} />
        {error.videoCount && <span style={{color: 'red',marginLeft: '10px'}}>{error.videoCount}</span>}

      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="headline" style={{ color: 'grey', display: 'block', fontWeight: 'bold' }}>
          Course Thumbnail:
        </label>
        <input type="text" id="course_thumbnail" style={{ marginLeft: '10px', width: '94%' }} onChange={handler}/>
        {error.thumbnail && <span style={{color: 'red',marginLeft: '10px'}}>{error.thumbnail}</span>}
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
          onClick={VideoHandler}
          
        >
          Video Upload
        </button>
      </div>
      {error.video && (
          <><span style={{ color: 'red', marginLeft: '10px' ,textAlign:'center'}}>{error.video}</span></>
        ) }
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
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
              onClick={UploadHandler}
            >
              Submit
            </button>
          </div>
      <Modal open={load} footer={null} centered>
        <VideoElement
          cur_video={videos[cur_vid_no]}
          number={cur_vid_no}
          navigate={navigateHelper}
          isLast={cur_vid_no + 1 === video_Count}
          changeData = {changeData}
          finish={Finish}
          vid={video_Count}
        />
      </Modal>
    </div>
  );
};

export default First;
