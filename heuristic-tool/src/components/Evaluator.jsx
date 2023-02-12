import React, { useState } from "react";
//import { Form, Row, Col, Button } from "react-bootstrap";

const Evaluator = () => {
  const [scores, setScores] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
  });

  const handleOptionChange = (e) => {
    switch (e.target.name) {
      case "question1":
        if (e.target.value === "option1") {
          setScores({ ...scores, question1: 1 });
        } else if (e.target.value === "option2") {
          setScores({ ...scores, question1: 0.5 });
        } else {
          setScores({ ...scores, question1: 0 });
        }
        break;
      case "question2":
        if (e.target.value === "option1") {
          setScores({ ...scores, question2: 1 });
        } else if (e.target.value === "option2") {
          setScores({ ...scores, question2: 0.5 });
        } else {
          setScores({ ...scores, question2: 0 });
        }
        break;
      case "question3":
        if (e.target.value === "option1") {
          setScores({ ...scores, question3: 1 });
        } else if (e.target.value === "option2") {
          setScores({ ...scores, question3: 0.5 });
        } else {
          setScores({ ...scores, question3: 0 });
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    // Save the sum to a database or display it on the page
    console.log(sum);
  };

  return (
    <div className="quiz-container col-md-auto ">
      <form onSubmit={handleSubmit}>
      <h3>Question 1</h3>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question1"
          value="option1"
          onChange={handleOptionChange}
        />
        Option 1 (1 point)
      </div>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question1"
          value="option2"
          onChange={handleOptionChange}
        />
        Option 2 (0.5 points)
      </div>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question1"
          value="option3"
          onChange={handleOptionChange}
        />
        Option 3 (0 points)
      </div>
      <h3>Question 2</h3>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question2"
          value="option1"
          onChange={handleOptionChange}
        />
        Option 1 (1 point)
      </div>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question2"
          value="option2"
          onChange={handleOptionChange}
        />
        Option 2 (0.5 points)
      </div>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question2"
          value="option3"
          onChange={handleOptionChange}
        />
        Option 3 (0 points)
      </div>
      <h3>Question 3</h3>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question3"
          value="option1"
          onChange={handleOptionChange}
        />
        Option 1 (1 point)
      </div>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question3"
          value="option2"
          onChange={handleOptionChange}
        />
        Option 2 (0.5 points)
      </div>
      <div className="quiz-form ">
        <input
          type="radio"
          name="question3"
          value="option3"
          onChange={handleOptionChange}
        />
        Option 3 (0 points)
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
    
    export default Evaluator;
    