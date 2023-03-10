import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
//import axios from 'axios';

const Form2 = (props) => {
  const navigate = useNavigate();
  //
  const [userData, setUserData] = useState({name:"", email: "", phone: "", company: "", website: props.websiteName, websiteUrl: props.websiteUrl, quesCat: "E-Learning" });

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

  const [questions] = useState([
    { question: "Are product descriptions clear and detailed with high-quality images?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Do you always know where you are on the site?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Can you easily get back to the homepage and the previous page?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },
    { question: "Does the hierarchy of categories/pages make sense to you?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Navigation" },

    { question: "Is the search box visible wherever you are on the site?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "Is the website easy to navigate and find what you are looking for?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "If you enter a misspelled word into the search box, or there are no results to show, does it provide suggestions?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },
    { question: "Are advanced search features available?", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "Search" },

    { question: "A clear status is shown during the loading of any modules and its elements", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "The interface has a minimal load such that it doesn't interfere with any learner's experience and/or actions", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "The educational programs are comprehensible and effective enough for the learners compared to the conventional learning means", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "The service provides a freedom of choice to pause and resume programs at the learner's will along with checkpoints to retain the progress.", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "The site provides a section for learners to hold discussions related to any topics relevant to the provided programs in a systematic and orderly fashion.", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "The programs contain various types of graphical representation in the most effective way to aid in learning experience.", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "A concise summary of modules and units are provided for a quick revision of key points reducing the time usually needed for the same.", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
    { question: "The service provides a variety of resources to the learners for pursuing further knowledge on the studied units.", options: ["Yes", "Room for improvement", "No", "Not Applicable"], scores: [2, 1, 0, -1], qCat: "ELearning" },
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
    let notApplicable = 0;
    newScores[currentQuestion] = score;
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      const categoryScores = {};
      const categoryQuestionScores = {};
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
          notApplicable++;
          categoryQuestionScores[qCat][index] = -1; // add -1 for not applicable options
        }
      });
      console.log("Category applicable counts:", categoryApplicableCounts);
  
      setUserData({
        ...userData,
        rresult: categoryScores, //category wise score
        roverall: newScores, //all questions' individual score
        rvalid: applicable,
        rinvalid: notApplicable,
        rquestionScores: categoryQuestionScores, //scores for each individual question in qCat
        categoryRValid: categoryApplicableCounts
      });

      const {name, email , phone, company, website, websiteUrl, quesCat, rresult, roverall, rvalid, rinvalid, rquestionScores, categoryRValid} = userData;
      try {
        const res = await fetch('/tool', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email , phone, company, website, websiteUrl, quesCat, rresult, roverall, rvalid, rinvalid, rquestionScores, categoryRValid
          })
        });
        const data = await res.json();
        if(!data){
          console.log("data not updated");
        }else{
          alert("evaluated website successfully and stored data to db");
          //setUserData({...userData, website: "", websiteUrl: "", rresult:{}, roverall: [], rvalid: 0, rinvalid: 0, rquestionScores: {}});
          //navigate('/results', { state: { userData }, replace: true });
          
                   
        }
      } catch (error) {
        console.error(error);
      }
      
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

export default Form2;
