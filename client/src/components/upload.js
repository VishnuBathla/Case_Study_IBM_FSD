import React, { createRef } from "react";
// import { useNavigate } from "react-router-dom";

const Upload = () => {
  const ref = createRef()
  // const navigate = useNavigate()
  const darkTheme = {
    backgroundColor: "#333",
    color: "#fff",
  };

  const lightTheme = {
    backgroundColor: "#f2f2f2",
    color: "#333",
  };
  const handler = ()=>{
    // navigate("/"+ref.current.value)
  }
  const styles={
    style:{
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      minWidth: "200px",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      ...(lightTheme || {}),
    }
  }

  return (
    <>
      <div
        style={{
          width:'80%',
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            ...(darkTheme || {}),
          }}
        >
          Create Course
        </h1>
        <div
        >
          <label style={{fontSize:'1.6rem',fontWeight:'bolder',paddingBottom:'1%',margin:'0',display:'block'}}>Course Category</label>
          <select
          ref ={ref}
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              ...(darkTheme || {}),
            }}
            onClick={handler}
          >
          <option value="upload" style={{...styles.style,color: "#333" }}>  Select Category</option>
            <option
                className="dropdown-item"
                value="aeronautical"
                style={{...styles.style, color: "#333" }}
              >
                Aeronautical Engineering
            </option>
            <option
                className="dropdown-item"
                value="artificial"
                style={{ ...styles.style,color: "#333" }}
              >
                Artificial Intelligence
            </option>
            <option
                className="dropdown-item"
                value="mechanical"
                style={{...styles.style, color: "#333" }}>
                Mechanical Engineering
            </option>
            <option className="dropdown-item"
                value="industrial"
                style={{...styles.style, color: "#333" }}>
                Industrial
            </option>
          </select>
        </div>
      </div>
    </>
  );
};


export default Upload;
