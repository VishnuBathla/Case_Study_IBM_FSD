import { Modal } from "antd";
import { useState } from "react";
import QuizMain from "./QuizMain";
import QuestionElement from "./QuestionElement";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const QuizComponent = () => {
  const [quizData, setQuizData] = useState({
    title: "",
    course: "",
    time: 0,
    no_of_questions: 0,
    deadline: "",
    questions: [],
  });
  const [cur_ques, setQPos] = useState(0);

  const NavigateQuestions = (type) => {
    // console.log(type)
    switch (type) {
      case "decr":
        setQPos(cur_ques - 1);
        break;
      case "incr":
        setQPos(cur_ques + 1);
        break;
      default:
    }
  };

  const updateQuizData = (data) => {
    setQuizData((prevdata) => {
      // console.log({ ...prevdata, ...data });
      return { ...prevdata, ...data };
    });
  };
  const changeQuestionAtIndex = (index, newValue) => {
    setQuizData((prevQuizData) => {
      const newQuestions = [...prevQuizData.questions]; 
      newQuestions[index] = newValue; 

      const updatedQuizData = {
        ...prevQuizData,
        questions: newQuestions,
      };

      return updatedQuizData;
    });
  };


  const [Modal_No, vis_Modal] = useState(false);
  const [showModal, setModalState] = useState(false);
  const Finish = ()=>{
    setModalState(false)
    vis_Modal(false)
    setQPos(0)
    // console.log(quizData)-> at this step we have to dispatch action
    setQuizData({
      title: "",
      course: "",
      time: 0,
      no_of_questions: 0,
      deadline: "",
      questions: [],
    });
  }
  const handleCancel = () => {
    setModalState(false);
    vis_Modal(false)
    setQuizData({
      title: "",
      course: "",
      time: 0,
      no_of_questions: 0,
      deadline: "",
      questions: [],
    });
    setQPos(0);
  };

  return (
    <>
    <span onClick={()=> setModalState(true)}>
    <CheckBoxIcon />
              Quiz
      </span>
      {showModal && (
        <Modal
          open={true}
          footer={null}
          onCancel={handleCancel}
          maskClosable={false}
        >
          {!Modal_No && (
            <QuizMain
              value={quizData}
              cancelModal={setModalState}
              updateQuiz={updateQuizData}
              setModal={vis_Modal}
            />
          )}
          {Modal_No && (
            <QuestionElement
              cur_question={quizData.questions[cur_ques]}
              number={cur_ques}
              navigate={NavigateQuestions}
              isLast={cur_ques + 1 === quizData.no_of_questions}
              changeData = {changeQuestionAtIndex}
              finish={Finish}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default QuizComponent;
