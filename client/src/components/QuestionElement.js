import React, { useEffect, useState } from 'react';

const QuestionElement = ({ cur_question, number, navigate, isLast, changeData,finish }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  });
  const [correctOption, setCorrectOption] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setQuestion(cur_question.question);
    setOptions({
      option1: cur_question.option1,
      option2: cur_question.option2,
      option3: cur_question.option3,
      option4: cur_question.option4,
    });
    setCorrectOption(cur_question.correct);
    setErrors({})
  }, [cur_question, number]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'question') {
      setQuestion(value);
    } else {
      setOptions((prevOptions) => ({
        ...prevOptions,
        [name]: value,
      }));
    }
  };

  const handleRadioChange = (e) => {
    setCorrectOption(e.target.value);
  };
  const ErrorChecker = ()=>{
    const newErrors = {};

    if (question.trim() === '') {
      newErrors.question = 'Question is required';
    }

    for (const option in options) {
      if (options[option].trim() === '') {
        newErrors[option] = 'Option is required';
      }
    }

    if (correctOption === '') {
      newErrors.correctOption = 'Please select the correct option';
    }
    // console.log(newErrors)
    //  console.log(JSON.parse(JSON.stringify(newErrors)))
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = ErrorChecker()
    if (Object.keys(newErrors).length === 0) {
      // Create the question object with the entered data
      const questionObject = {
        question,
        ...options,
        correct: correctOption,
      };

      changeData(number, questionObject);
      // console.log(questionObject);
      // Reset the form inputs
      setQuestion('');
      setOptions({
        option1: '',
        option2: '',
        option3: '',
        option4: '',
      });
      setCorrectOption('');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleClear = () => {
    setQuestion('');
    setOptions({
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    });
    setCorrectOption('');
    setErrors({});
  };

  const handlePrevious = (e) => {
    const newErrors = ErrorChecker()
    if (JSON.stringify(newErrors)==="{}") {
      handleSubmit(e);
      navigate('decr');
    }
    else{
      setErrors(newErrors)
    }
  };

  const handleNext = (e) => {
    const newErrors = ErrorChecker()
    if (JSON.stringify(newErrors)==="{}") {
      handleSubmit(e);
      // console.log(isLast)
      if(!isLast){
      navigate('incr');}
      else{
        finish()
      }
    }else{
      setErrors(newErrors)
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Question {number + 1}</h2>
      <div style={styles.questionGroup}>
        <label htmlFor="questionInput" style={styles.boldText}>
          Question-Text:
        </label>
        <input
          type="text"
          id="questionInput"
          name="question"
          value={question}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.question && <span style={styles.error}>{errors.question}</span>}
      </div>
      <h2 style={styles.heading}>Options</h2>
      <div style={styles.formGroup}>
        <input
          type="radio"
          name={`correctOption-${number}`}
          value="option1"
          checked={correctOption === 'option1'}
          onChange={handleRadioChange}
          style={styles.radio}
        />
        <label htmlFor="option1Input">Option 1:</label>
        <input
          type="text"
          id="option1Input"
          name="option1"
          value={options.option1}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.option1 && <span style={styles.error}>{errors.option1}</span>}
      </div>
      <div style={styles.formGroup}>
        <input
          type="radio"
          name={`correctOption-${number}`}
          value="option2"
          checked={correctOption === 'option2'}
          onChange={handleRadioChange}
          style={styles.radio}
        />
        <label htmlFor="option2Input">Option 2:</label>
        <input
          type="text"
          id="option2Input"
          name="option2"
          value={options.option2}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.option2 && <span style={styles.error}>{errors.option2}</span>}
      </div>
      <div style={styles.formGroup}>
        <input
          type="radio"
          name={`correctOption-${number}`}
          value="option3"
          checked={correctOption === 'option3'}
          onChange={handleRadioChange}
          style={styles.radio}
        />
        <label htmlFor="option3Input">Option 3:</label>
        <input
          type="text"
          id="option3Input"
          name="option3"
          value={options.option3}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.option3 && <span style={styles.error}>{errors.option3}</span>}
      </div>
      <div style={styles.formGroup}>
        <input
          type="radio"
          name={`correctOption-${number}`}
          value="option4"
          checked={correctOption === 'option4'}
          onChange={handleRadioChange}
          style={styles.radio}
        />
        <label htmlFor="option4Input">Option 4:</label>
        <input
          type="text"
          id="option4Input"
          name="option4"
          value={options.option4}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        {errors.option4 && <span style={styles.error}>{errors.option4}</span>}
      </div>
      <div style={styles.buttonGroup}>
        {number !== 0 && (
          <button type="button" style={styles.button} onClick={handlePrevious}>
            Previous
          </button>
        )}
        <button type="button" style={styles.button} onClick={handleNext}>
          {isLast ? 'Finish' : 'Next'}
        </button>
        <button type="button" style={styles.button} onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    margin: '0 auto',
  },
  heading: {
    margin: '20px 0 10px',
  },
  questionGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  boldText: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  input: {
    width: '300px',
    marginLeft: '10px',
    padding: '5px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  radio: {
    marginRight: '10px',
  },
  error: {
    color: 'red',
    marginLeft: '10px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  button: {
    marginLeft: '10px',
  },
};

export default QuestionElement;
