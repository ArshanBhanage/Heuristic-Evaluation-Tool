import React, { useState, useEffect } from 'react';

const Form2 = (props) => {

  //
  const [userData, setUserData] = useState({name:"", email: "", phone: "", company: "", website: props.websiteName, websiteUrl: props.websiteUrl });

  const userEvaluator = async () => {
    try {
      const res = await fetch('/getData', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
      
      const data = await res.json();
      //console.log(userData);
      //const { name, email, phone, company } = res.data;
      //console.log(JSON.stringify({ name, email, phone, company }));
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone, company: data.company });
  
    } catch (err) {
      console.log(err);
    }
  }


  //useEffect function is run first when we open a page 
  // here used to refresh page
  useEffect(() => {
      userEvaluator();
    
  }, []);
  //

  useEffect(() => {
    console.log("Updated userData:", userData);
  }, [userData]);

  const [questions, setQuestions] = useState([
    { question: "Are product descriptions clear and detailed with high-quality images?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Clear and detailed with high-quality images?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Is the website easy to navigate and find what you are looking for?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "Was the checkout process smooth and easy to complete?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "E-Learning" },
    // Add more questions here
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleNext = (e) => {
    e.preventDefault();
    const score = questions[currentQuestion].scores[selectedOption];
    const newScores = [...scores];
    let applicable = 0;
    let notApplicable = 0;
    newScores[currentQuestion] = score;
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      const categoryScores = {};
      const categoryQuestionScores = {};
  
      questions.forEach(({qCat, scores}, index) => {
        if (!categoryScores[qCat]) {
          categoryScores[qCat] = 0;
          categoryQuestionScores[qCat] = Array(scores.length).fill(0);
        }
  
        const score = newScores[index];
        if (score >= 0) {
          categoryScores[qCat] += score;
          categoryQuestionScores[qCat][index] = score;
          applicable++;
        } else {
          notApplicable++;
          categoryQuestionScores[qCat][index] = -1; // add -1 for not applicable options
        }
      });
  
      setUserData({
        ...userData,
        rresult: categoryScores, //category wise score
        roverall: newScores, //all questions' individual score
        rvalid: applicable,
        rinvalid: notApplicable,
        rquestionScores: categoryQuestionScores //scores for each individual question in qCat
      });
    }
  
    setScores(newScores);
  };
  

  
  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    } else {
      // Handle beginning of quiz
    }
  }

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  }
  
  return (
    <>
    <h1>{props.websiteName}</h1>
    <div className="quiz-container col-md-auto ">
      <form method='POST' onSubmit={handleNext}>
        <h3>{questions[currentQuestion].qCat}</h3>
        <h3 className="h3-gap">{currentQuestion + 1}.{questions[currentQuestion].question}</h3>
        <div className="container">
          <div className="row">
            {questions[currentQuestion].options.map((option, index) => (
              <div className={`col-sm ${selectedOption === index ? 'selected' : ''}`} onClick={() => handleOptionClick(index)} key={index}>
                <div className="quiz-form" >
                  <span>{option}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className='flex' style={{ display: "flex"}}>
          <div className='option-container' style={{ flexGrow: 1 }}>
            {currentQuestion > 0 && <button type="button" onClick={handlePrevious}>Previous</button>}
          </div>
          <div className='option-container' style={{ flexGrow: 1 }}>
            <button type="submit" disabled={selectedOption === null}>{currentQuestion < questions.length - 1 ? "Save & Next" : "Submit"}</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Form2;
