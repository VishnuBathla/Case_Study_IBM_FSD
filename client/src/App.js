import React from "react";
import SignupPage from "./components/student/signUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";
import LandingPage from "./components/landingPage";
import SignInPage from "./components/student/signInPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/studentSignup" element={<SignupPage />} />
        <Route path="/studentSignin" element={<SignInPage />} />
        {/* <Route path="/studentlogin" component={} /> */}
      </Routes>
    </Router>
  );
};

export default App;
