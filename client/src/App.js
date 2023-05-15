import React from "react";
import SignupPage from "./components/student/signUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/studentSignup" element={<SignupPage />} />
        {/* <Route path="/studentlogin" component={} /> */}
      </Routes>
    </Router>
  );
};

export default App;
