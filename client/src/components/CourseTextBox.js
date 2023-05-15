import "./styles/CourseTextBox.css";

function CourseTextBox() {
  return (
    <div className="CourseTextBox">
      <form>
        <div>
          <textarea
            id="textarea"
            rows="20"
            cols="60"
            placeholder="Enter Details Here"
          ></textarea>
        </div>
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}
export default CourseTextBox;
