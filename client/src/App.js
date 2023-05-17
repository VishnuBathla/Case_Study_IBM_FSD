import React from "react";
import SignupPage from "./components/student/signUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";
import LandingPage from "./components/landingPage";
import SignInPage from "./components/student/signInPage";
import Profile from "./components/instructor_profile";
import CourseCatalog from "./components/course_catalog";
import CourseCurriculum from "./components/course_curriculum";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/studentSignup" element={<SignupPage />} />
        <Route path="/studentSignin" element={<SignInPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/curriculum/:id" element={<CourseCurriculum />}/>
        {/* <Route path="/studentlogin" component={} /> */}
      </Routes>
    </Router>
  );
};

export default App;
