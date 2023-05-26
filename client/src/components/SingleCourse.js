import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const dummyData = {
  _id: {
    $oid: "646d8825984cbce2e1b278be",
  },
  title: "Introduction to JavaScript",
  headline: "Best Javascript Course all in one",
  no_of_Videos: 3,
  instructor_id: "1",
  details: "This course provides an introduction to JavaScript programming.",
  modules: "Module 1: Basics, Module 2: Functions, Module 3: Objects",
  uploaded_on: {
    $date: "2023-05-23T06:30:00.000Z",
  },
  videos: [
    {
      title: "introduction1",
      thumbnail:
        "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
      videoLink:
        "https://www.youtube.com/watch?v=PI6VA8ZNL-0&ab_channel=HacksmithIndustries",
    },
    {
      title: "introduction2",
      thumbnail:
        "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
      videoLink:
        "https://www.youtube.com/watch?v=PI6VA8ZNL-0&ab_channel=HacksmithIndustries",
    },
    {
      title: "introduction3",
      thumbnail:
        "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
      videoLink:
        "https://www.youtube.com/watch?v=PI6VA8ZNL-0&ab_channel=HacksmithIndustries",
    },
  ],
  __v: 0,
  discussion_form: false,
  price: 100,
  thumbnail:
    "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
};
const SingleCourse = () => {
  return (
    <div style={{ textAlign: "left", width: "100%", fontFamily: "cambria" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "lightgray",
          padding: "20px",
        }}
      >
        <div
          style={{
            color: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h5>{dummyData.headline}</h5>
          <h1 style={{fontSize:"50px"}}>{dummyData.title}</h1>
          <h3 style={{ fontWeight: "400" }}>{dummyData.details}</h3>
          <p>Last Updated : {dummyData.uploaded_on.$date.substring(0, 10)}</p>
        </div>
        <div
          style={{
            border: "1px solid white",
            backgroundColor: "white",
            boxShadow: "1px 0px 5px 1px gray",
            borderRadius: "10px",
          }}
        >
          <img
            src={dummyData.thumbnail}
            alt={dummyData.title}
            width={"100%"}
            height={"50%"}
            style={{ borderRadius: "10px" }}
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ textAlign: "center", marginTop: "10px" }}>
              {dummyData.title}
            </h4>
            <hr />
            <h4>${dummyData.price}</h4>
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "white",
                border: "1px solid black",
                fontWeight: "bold",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              Buy this Course
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          margin: "20px",
          width: "50%",
        }}
      >
        <h3>What you'll learn</h3>
        <h6
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          {dummyData.modules.split(",").map((item) => (
            <div style={{ display: "flex" }}>
              <CheckIcon style={{ marginRight: "10px" }} />
              <p>
                {" "}
                {item} <br />{" "}
              </p>
            </div>
          ))}
        </h6>
      </div>
      <div
        style={{
          margin: "20px",
          width: "50%",
        }}
      >
        <h3>Course Content</h3>
        <p>No. of Videos : {dummyData.no_of_Videos}</p>
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
          }}
        >
          {dummyData.videos.map((item) => {
            return (
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ height: "80px", width: "150px" }}
                />
                <h5 style={{ marginLeft: "20px" }}>{item.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{
          margin: "20px",
          width: "50%",
        }}>
        <h3>Description</h3>
        <h6>{dummyData.details}</h6>
        <h6>{dummyData.headline}</h6>
      </div>
    </div>
  );
};

export default SingleCourse;
