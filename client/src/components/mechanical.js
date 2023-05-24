import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Next from './next';

function Mechanical() {
  const [load,loader]=useState(false)
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <span
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            Course Description
          </span>
          <input
            type="text"
            id="Course Description"
            style={{
              width: '300px',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
          <br />
          {/* <Link to="/next"> */}
            <button onClick={()=>loader(true)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#6c63ff',
                color: '#fff',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Upload Course
            </button>
          {/* </Link> */}
          {load && <Next/>}
        </div>
      </div>
    </div>
  );
}

export default Mechanical;
