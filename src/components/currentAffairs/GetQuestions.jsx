import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import MyNavbar from "../Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SaveCurrentAffairsResponse } from "../../store/slices/Visitor";

const GetQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const location = useLocation();
  const dateData = location.state?.date || null;
  const dispatch = useDispatch()
  const [data1, setData1] = useState(
    [...Array(dateData.questions.length)].map(() => ({
      selectedOption: null,
      isAnswered: false,
      isCorrect: false,
      isExplanation: false,
  
    }))
  );



  const handleExplanation = () => {
    if (data1[currentQuestionIndex].isExplanation === false) {
      setData1([...data1, (data1[currentQuestionIndex].isExplanation = true)]);
    } else {
      setData1([...data1, (data1[currentQuestionIndex].isExplanation = false)]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < dateData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleCheckboxChange = (optionId, index) => {
    const newData = [...data1];
    newData[currentQuestionIndex].selectedOption = index;
    newData[currentQuestionIndex].isAnswered = true;
    setData1(newData);
    evaluateAnswer();
  };

  const evaluateAnswer = () => {
    const currentQuestion = dateData.questions[currentQuestionIndex];
    const isAnswerCorrect =
      parseInt(data1[currentQuestionIndex].selectedOption) ===
      parseInt(currentQuestion.correctOption-1);
    const newData = [...data1];
    newData[currentQuestionIndex].isCorrect = isAnswerCorrect;
    setData1(newData);
  };

  const currentQuestion = dateData.questions[currentQuestionIndex];


  const  Submit =()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    const visitorsId = user?.data?.id;
  
    const responses = data1.map((questionData, index) => {
      const currentQuestion = dateData.questions[index];
      console.log(currentQuestion)

      return {
        questionId: currentQuestion?._id,
        correctOption: currentQuestion?.correctOption,
        selectedOption: questionData?.selectedOption + 1, 
      };
    });
  
    const item = {
      visitorId: visitorsId,
      currentAffairsId: dateData._id,
      responses: responses,
    };
      
    
    dispatch(SaveCurrentAffairsResponse(item))
    .unwrap()
    .then((data) => {
      alert(data.user.message)
    })
    .catch(({ message }) => {
      // setModalMessage(message);
      // setShowModal(true);
    });
  }

  console.log(dateData)


  return (
    <div>
      <MyNavbar />
      <div className="container d-flex justify-content-center mt-5 pb-5 ">
        <Col lg={8} className="card pb-4 p-4">
          <h2>{dateData?.monthName} Quiz</h2>
          <h6 className="mt-3">   {new Date(dateData?.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}  Quiz</h6>
          <div className="d-flex m-1">
            <p className="m-1">{currentQuestionIndex + 1})</p>{" "}
            <span className="m-1">{currentQuestion?.question}</span>
          </div>
          <ul>
            {currentQuestion?.options?.map((option, index) => (
              <div key={index} className="d-flex justify-content-between w-50">
                <div className="d-flex justify-content-between">
                  <p className="m-1">{index + 1})</p>
                  <p className="m-1" key={index}>
                    {option?.optionValue}
                  </p>
                </div>
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={data1[currentQuestionIndex].selectedOption === index}
                  onChange={() => handleCheckboxChange(option._id, index)}
                  disabled={data1[currentQuestionIndex].isAnswered}
                />
              </div>
            ))}
          </ul>

          <div className="m-3">
            {data1[currentQuestionIndex].isAnswered &&
              data1[currentQuestionIndex].isCorrect && (
                <span className="text-success m-2">Correct!</span>
              )}
            {data1[currentQuestionIndex].isAnswered &&
              !data1[currentQuestionIndex].isCorrect && (
                <div>
                  <span className="text-danger m-2">Wrong!</span>
                  <div>
                    Correct Answer:{" "}
                    {
                      currentQuestion.options[currentQuestion.correctOption-1]
                        .optionValue ? currentQuestion.options[currentQuestion.correctOption-1]
                        .optionValue  :""
                    }
                  </div>
                </div>
              )}

            <p className="m-2 explanation" onClick={handleExplanation}>
              explanation{" "}
            </p>
            {data1[currentQuestionIndex].isAnswered &&
              data1[currentQuestionIndex].isExplanation && (
                <p className="m-2">{currentQuestion.explanation}</p>
              )}
          </div>

          <div className="d-flex justify-content-end">
            <Button
              className="m-2"
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
            >
              Prev
            </Button>
            {currentQuestionIndex === dateData.questions.length - 1 ?
                <Button
                className="m-2"
                onClick={Submit}
            
              >
                Submit
              </Button>: <Button
              className="m-2"
              onClick={handleNext}
              disabled={currentQuestionIndex === dateData.questions.length - 1}
            >
              Next
            </Button>
            }
           
          </div>
        </Col>
      </div>
    </div>
  );
};

export default GetQuestions;
