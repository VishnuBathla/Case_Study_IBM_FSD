import React, { useState } from 'react';

const QuizMain = ({value,cancelModal,updateQuiz,setModal}) => {
  const [title, setTitle] = useState(value.title);
  const [course, setCourse] = useState(value.course);
  const [numQuestions, setNumQuestions] = useState(value.no_of_questions);
  const [time, setTime] = useState(value.time);
  const [deadline, setDeadline] = useState(value.deadline);
  const [errors, setErrors] = useState({});
  const Resetter = ()=>{
    setTitle("")
    setCourse("")
    setNumQuestions(0)
    setTime(0)
    setDeadline("")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (title.trim() === '') {
      newErrors.title = 'Title is required';
    }

    if (course === '') {
      newErrors.course = 'Course is required';
    }

    if (numQuestions <= 0) {
      newErrors.numQuestions = 'Number of Questions must be greater than zero';
    }

    if (time <= 0) {
      newErrors.time = 'Time in Minutes must be greater than zero';
    }

    if (deadline === '') {
      newErrors.deadline = 'Deadline is required';
    }

    if (Object.keys(newErrors).length === 0) {
        updateQuiz({title:title,course:course,no_of_questions:numQuestions,time:time,deadline:deadline,
            questions:Array.from({ length: numQuestions }, () => ({
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                correct: "",
              }))})
        setModal(true)
    //   console.log('Form submitted successfully!');
    }

    setErrors(newErrors);
  };

  const handleDeadlineChange = (e) => {
    const selectedDeadline = e.target.value;
    const now = new Date().toISOString().slice(0, 16); // Get current date and time in ISO format (yyyy-mm-ddTHH:mm)

    if (selectedDeadline >= now) {
      setDeadline(selectedDeadline);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
          required
        />
        {errors.title && <span style={styles.error}>{errors.title}</span>}
      </div>
      <div style={styles.formGroup}>
        <label>Course:</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={styles.input}
          required
        >
          <option value="">Select a course</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
        {errors.course && <span style={styles.error}>{errors.course}</span>}
      </div>
      <div style={styles.formGroup}>
        <label>Number of Questions:</label>
        <input
          type="number"
          value={numQuestions}
          min={1}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
          style={styles.input}
          required
        />
        {errors.numQuestions && <span style={styles.error}>{errors.numQuestions}</span>}
      </div>
      <div style={styles.formGroup}>
        <label>Time in Minutes:</label>
        <input
          type="number"
          value={time}
          min={1}
          onChange={(e) => setTime(Number(e.target.value))}
          style={styles.input}
          required
        />
        {errors.time && <span style={styles.error}>{errors.time}</span>}
      </div>
      <div style={styles.formGroup}>
        <label>Deadline:</label>
        <input
          type="datetime-local"
          value={deadline}
          onChange={handleDeadlineChange}
          style={styles.input}
          required
        />
        {errors.deadline && <span style={styles.error}>{errors.deadline}</span>}
      </div>
      <div style={styles.buttonGroup}>
      <button type="reset" onClick={Resetter} style={styles.button}>
    Reset
  </button>
  <button type="submit" style={styles.button}>
    Create Quiz
  </button>
  <button type="button" onClick={() => cancelModal(false)} style={styles.button}>
    Cancel
  </button>
</div>
    </form>
  );
};

const styles = {
buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  formGroup: {
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

export default QuizMain;
