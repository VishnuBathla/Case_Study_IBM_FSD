import React from "react";

const Upload = () => {
  const darkTheme = {
    backgroundColor: "#333",
    color: "#fff",
  };

  const lightTheme = {
    backgroundColor: "#f2f2f2",
    color: "#333",
  };

  return (
    <>
      <div
        style={{
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
          style={{
            display: "inline-block",
            position: "relative",
          }}
        >
          <button
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
          >
            Select Category
          </button>
          <ul
            className="dropdown-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              minWidth: "200px",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              ...(lightTheme || {}),
            }}
          >
            <li>
              <a
                className="dropdown-item"
                href="aeronautical"
                style={{ color: "#333" }}
              >
                Aeronautical Engineering
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="artificial"
                style={{ color: "#333" }}
              >
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="mechanical"
                style={{ color: "#333" }}
              >
                Mechanical Engineering
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="industrial"
                style={{ color: "#333" }}
              >
                Industrial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Upload;
