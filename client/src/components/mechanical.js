import React from 'react';
import { Link } from 'react-router-dom';

function mechanical() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            backgroundColor: '#f2f2f2',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
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
          <Link to="/next">
            <button
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default mechanical;
