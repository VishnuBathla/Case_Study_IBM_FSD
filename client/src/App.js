import React from "react";
import SignupPage from "./components/student/signUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";
import LandingPage from "./components/landingPage";
import SignInPage from "./components/student/signInPage";
import Profile from "./components/instructor_profile";
import CourseCatalog from "./components/course_catalog";
// import SideBar from "./components/sidebar";
import Main from "./components/main"
import VideoPlayer from "./components/VideoPlayer";
import Upload from './components/upload';
// import Aeronautical from './components/aeronautical';
// import Mechanical from './components/mechanical'
// import Artificial from './components/artificial'
// import Industrial from './components/industrial'
import Next from './components/next'
import Image from './components/image'
import Video from './components/video'
import Edit_Profile from "./components/edit_profile";
import DiscussionForm from './components/DiscussionForm';

// import QuizComponent from "./components/quizComponent";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/studentSignup" element={<SignupPage />} />
        <Route path="/studentSignin" element={<SignInPage />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/main" element={<Main/>} />
        <Route path="/test" element={<VideoPlayer/>} />
        <Route exact path="/upload" Component={Upload}/>
        <Route exact path="/tester" Component={Edit_Profile}/>
        <Route path="/discussion" element={<DiscussionForm />} />
        {/* <Route exact path="/aeronautical" Component={Aeronautical}/> */}
        {/* <Route exact path="/artificial" Component={Artificial}/> */}
        {/* <Route exact path="/industrial" Component={Industrial}/> */}
        {/* <Route exact path="/mechanical" Component={Mechanical}/> */}
        <Route exact path='/next' Component={Next}/>
        <Route exact path='/image' Component={Image}/>
        <Route exact path='/video' Component={Video}/>
        {/* <Route path="/test1" element={<QuizComponent/>} /> */}
        
        {/* <Route path="/studentlogin" component={} /> */}
      </Routes>
    </Router>
  );
};

export default App;
