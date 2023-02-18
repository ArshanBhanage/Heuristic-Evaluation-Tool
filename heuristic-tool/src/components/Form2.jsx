import React, { useState } from 'react';

const Form2 = (props) => {
    const [scores, setScores] = useState({
      question1: 0,
      question2: 0,
      question3: 0,
    });

    const[finalScore, setFinalScore] = useState(0);
  
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
            finalScore = setFinalScore(sum);
        //console.log(finalScore);
            console.log(sum);
    };
  
    return (
      <div className="quiz-container col-md-auto ">
        <form onSubmit={handleSubmit}>
  
      <div>
        
      </div>
      <h1>this is form 1{props.websiteName}</h1>
        <h3 className = "h3-gap" >Question 1111</h3>
        <div className="container">
    <div className="row">
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question1"
            value="option1"
            onChange={handleOptionChange}
          />
          Option 1 (1.0 pt)
        </div>
      </div>
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question1"
            value="option2"
            onChange={handleOptionChange}
          />
          Option 2 (0.5 pt)
        </div>
      </div>
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question1"
            value="option3"
            onChange={handleOptionChange}
          />
          Option 3 (0.0 pt)
        </div>
      </div>
    </div>
  </div>  
  
        <h3 className = "h3-gap" >Question 2</h3>
        <div className="container">
    <div className="row">
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question2"
            value="option1"
            onChange={handleOptionChange}
          />
          Option 1 (1.0 pt)
        </div>
      </div>
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question2"
            value="option2"
            onChange={handleOptionChange}
          />
          Option 2 (0.5 pt)
        </div>
      </div>
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question2"
            value="option3"
            onChange={handleOptionChange}
          />
          Option 3 (0.0 pt)
        </div>
      </div>
    </div>
  </div>    
  
        <h3 className = "h3-gap" >Question 3</h3>
        <div className="container">
    <div className="row">
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question3"
            value="option1"
            onChange={handleOptionChange}
          />
          Option 1 (1.0 pt)
        </div>
      </div>
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question3"
            value="option2"
            onChange={handleOptionChange}
          />
          Option 2 (0.5 pt)
        </div>
      </div>
      <div className="col-sm">
      <div className="quiz-form ">
          <input
            type="radio"
            name="question3"
            value="option3"
            onChange={handleOptionChange}
          />
          Option 3 (0.0 pt)
        </div>
      </div>
    </div>
  </div>
        <button className="buttons-radio" type="submit">Submit</button>
      </form>
      </div>
    );
  };
  

export default Form2
