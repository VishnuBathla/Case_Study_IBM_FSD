import React from "react";
import './styles/landingPage.css'
import { Link } from "react-router-dom";
function LandingPage (){
  return (
    <div className="LandingPage">
      <div class="header">
    <h1>LearnIt</h1>
  </div>
  <div class="container">
    <h1>Free online courses to achieve your goals</h1>
    <p>Looking to add new skills? Is there a hobby you’ve wanted to try? We’re LearnIt, a leading destination for learning and teaching online.</p>
    <Link class="cta-button" to="/studentSignup">Get Started</Link>
  </div>
  </div>
  );
};

export default LandingPage;
