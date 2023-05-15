import "./styles/CourseDetails.css";
import CourseTextBox from "./CourseTextBox";
import Footer from "./Footer";
import Header from "./Header";

function CourseDetails() {
  return (
    <div className="CourseDetails">
      <Header />
      <div className="courseselected">
        <h1>courseDetail</h1>
      </div>
      <div className="Details">
        <div className="paddingdetails">
          <h1>Details</h1>
          <CourseTextBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CourseDetails;
