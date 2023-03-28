import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

const Form1 = (props) => {
  const navigate = useNavigate();
  //
  const [userData, setUserData] = useState({ website: props.websiteName, websiteUrl: props.websiteUrl, quesCat: "E-Commerce" });

  const userEvaluator = async () => {
    try {
      const res = await fetch('/getData', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
  
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
    if(userData.categoryRValid){
      (async () => {
        const {website, websiteUrl, quesCat, rresult, rvalid, categoryRValid, rquestionScores} = userData;
        try {
          const res = await fetch('/tool', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              website, websiteUrl, quesCat, rresult, rvalid, categoryRValid, rquestionScores
            })
          });
          const data = await res.json();
          if(!data){
            console.log("data not updated");
          }else{
            alert("evaluated website successfully and stored data to db");
            //setUserData({...userData, website: "", websiteUrl: "", rresult:{}, roverall: [], rvalid: 0, rinvalid: 0, rquestionScores: {}});
              navigate('/results', {replace: true});
                     
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [userData]);

  const [questions] = useState([
    { question: "Are product descriptions clear and detailed with high-quality images?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Do you always know where you are on the site?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Can you easily get back to the homepage and the previous page?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Does the hierarchy of categories/pages make sense to you?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },

    { question: "Is the search box visible wherever you are on the site?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "Is the website easy to navigate and find what you are looking for?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "If you enter a misspelled word into the search box, or there are no results to show, does it provide suggestions?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "Are advanced search features available?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },

    { question: "Are product descriptions clear and detailed with high-quality images?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "mainquestions" },
    { question: "Does the website provide clear and concise information about its products and services? ", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "mainquestions" },
    { question: "Are the website's forms and checkout processes easy to use and understand?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "mainquestions" },
    { question: "Are customer reviews and ratings visible and accessible?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "mainquestions" },
    { question: "Is the shopping cart easily accessible and clearly shows items added?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "mainquestions" },
    { question: "Does the website provide ways for users to contact customer support if they have questions or issues?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "mainquestions" },
    
    // Add more questions here
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleNext = async (e) => {
    e.preventDefault();
    const score = questions[currentQuestion].scores[selectedOption];
    const newScores = [...scores];
    let applicable = 0;
    newScores[currentQuestion] = score;
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      const categoryScores = {};
      const categoryQuestionScores = {};
      const questionScores = {};
      const categoryApplicableCounts = {};
  
      questions.forEach(({qCat, scores}, index) => {
        if (!categoryScores[qCat]) {
          categoryScores[qCat] = 0;
          categoryQuestionScores[qCat] = Array(scores.length).fill(0);
          categoryApplicableCounts[qCat] = 0;
        }

        const score = newScores[index];
        if (score >= 0) {
          categoryScores[qCat] += score;
          categoryQuestionScores[qCat][index] = score;
          categoryApplicableCounts[qCat]++;
          applicable++;
        } else {
          categoryQuestionScores[qCat][index] = -1; // add -1 for not applicable options
        }

        questionScores[index] = {
          category: questions[index].qCat,
          question: questions[index].question,
          score: score
        };
      });
      console.log("Question Scores:", questionScores);
  
      setUserData({
        ...userData,
        rresult: categoryScores, //category wise score
        //roverall: newScores, //all questions' individual score
        rvalid: applicable,
        //rquestionScores: categoryQuestionScores, //scores for each individual question in qCat
        categoryRValid: categoryApplicableCounts,
        //rquestionScores: questionScores
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
    <div style={{marginLeft: "6%"}}><h2>{props.websiteName} | {props.websiteUrl}</h2></div>
    <div className="quiz-container col-md-auto ">
      <form method='POST' onSubmit={handleNext}><br />
        <h4>{questions[currentQuestion].qCat}</h4><hr></hr><br />
        <div className='que-cont'> <h4 className="h3-gap">{currentQuestion + 1}.{questions[currentQuestion].question}</h4> </div>
        <div className="container">
          <div className="row g-6" style={{marginTop: "2%"}}>
            {questions[currentQuestion].options.map((option, index) => (
              <div className={`col-sm ${selectedOption === index ? 'selected' : ''}`} onClick={() => handleOptionClick(index)} key={index}>
                  <span>{option}</span>
                
              </div>
            ))}
          </div>
        </div>
  <hr />
        <div className='flex' style={{ display: "flex"}}>
          <div className='option-container'>
            {currentQuestion > 0 && <button className='btn btn-outline-secondary' type="button" onClick={handlePrevious}>Previous</button>}
          </div>
          <div className='option-container'>
            <button className='btn btn-outline-success' type="submit" disabled={selectedOption === null}>{currentQuestion < questions.length - 1 ? "Save & Next" : "Submit"}</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Form1;
