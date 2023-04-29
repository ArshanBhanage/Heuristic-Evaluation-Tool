import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form2 = (props) => {
  const navigate = useNavigate();
  //
  const [userData, setUserData] = useState({
    website: props.websiteName,
    websiteUrl: props.websiteUrl,
    quesCat: "E-Learning",
  });

  const userEvaluator = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
  };

  //useEffect function is run first when we open a page
  // here used to refresh page
  useEffect(() => {
    userEvaluator();
  }, []);
  //

  useEffect(() => {
    console.log("Updated userData:", userData);
    if (userData.rquestionScores) {
      (async () => {
        const {
          website,
          websiteUrl,
          quesCat,
          rquestionScores,
          rresult,
          rvalid,
          categoryRValid,
        } = userData;
        try {
          const res = await fetch("/tool", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              website,
              websiteUrl,
              quesCat,
              rquestionScores,
              rresult,
              rvalid,
              categoryRValid,
            }),
          });
          const data = await res.json();
          if (!data) {
            console.log("data not updated");
          } else {
            alert("evaluated website successfully and stored data to db");
            //setUserData({...userData, website: "", websiteUrl: "", rresult:{}, roverall: [], rvalid: 0, rinvalid: 0, rquestionScores: {}});
            navigate("/results", { replace: true });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [userData]);

  const [questions] = useState([
    
   //first impressions
   {
    question:
      "On the homepage, is it clear what the business does and what the key benefits are for customers?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "First Impression",
  },
{
    question:
      "Does the initial impression (imagery/design/information) support the proposition?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "First Impression",
  },

{
    question:
      "Is the website representative of the brand you know offline?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "First Impression",
  },

{
    question:
      "Does the website feel current and up to date?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "First Impression",
  },

{
    question:
      "Does the website have plenty of white space and feel uncluttered?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "First Impression",
  },

{
    question:
      "Is it clear where to go or what to do next from the homepage?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "First Impression",
  },


  {
    question:
      "Do you always know where you are on the site?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Navigation",
  },

{
    question:
      "Can you easily get back to the homepage and the previous page?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Navigation",
  },

{
    question:
      "Does the information requested feel necessary for the task you are trying to complete?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Forms",
  },
{
    question:
      "Are you notified of errors in form fields in real time?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Forms",
  },
{
    question:
      "Does the form validate information to help prevent errors?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Forms",
  },

{
    question:
      "Does the form provide shortcuts for inputting information?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Forms",
  },


  {
    question:
      "Is the search box visible wherever you are on the site?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Search",
  },

{
    question:
      "If you enter a misspelled word into the search box, or there are no results to show, does it provide suggestions?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Search",
  },

{
    question:
      "Are advanced search features available?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Search",
  },

{
    question:
      "Are advanced search features such as filtering easy to undo or remove?",
    options: ["Yes", "Room for improvement", "No", "Not Applicable"],
    scores: [2, 1, 0, -1],
    qCat: "Search",
  },


//information
{
question:
  "Is the content presented in a logical order?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Information",
},

{
question:
  "Are fonts, colours, icons, layout and links, consistent across the website?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Information",
},

{
question:
  "Is the content as concise as it can be?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Information",
},


{
question:
  "Does the font and it's size make information easy to read?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Information",
},

{
question:
  "Is the content free from jargon and terms your users are unlikely to be familiar with?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Information",
},

{
question:
  "Is the content localised for the audience?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Information",
},


// trust
{
question:
  "Does it give you confidence that you won't be spammed?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Trust and Persuasion",
},

{
question:
  "Is there a privacy policy that's short, and easy to read?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Trust and Persuasion",
},

{
question:
  "Can you easily find the contact information and address of company?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Trust and Persuasion",
},

{
question:
  "Does the website has a SSL certificate?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Trust and Persuasion",
},

{
question:
  "Are there real people behind the company referenced in some way?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Trust and Persuasion",
},

//interaction
{
question:
  "When you take an action that is not immediate, are there any visual cues to show the website is responding?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Interaction",
},
{
question:
  "Does the design and functionality work across different screen sizes?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Interaction",
},
{
question:
  "Are you warned before taking an irreversible action such as permanently deleting something?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Interaction",
},
{
question:
  "Does the website feel fast, and quickly reacts to actions you take?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Interaction",
},
{
question:
  "Can you personalise information which is unique to you?",
options: ["Yes", "Room for improvement", "No", "Not Applicable"],
scores: [2, 1, 0, -1],
qCat: "Interaction",
},

{
  question:
    "Website provides tools to support learning/authoring and collaboration viz. chat , discussion forum ,sharing contents , podcasting etc ",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "This website provides excellent motivation to learn",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "Website can effectively give feedback or guidance by assessing the progress and knowledge gained by the learner at any time.",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question: "The website always keeps track of learners progress / performance and informs through appropriate feedback.",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "The website provides an excellent problem solving environment",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "The website supports all the tasks of concern to teachers and students in during teaching-learning process.",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "The website provides analysis and personalization of learning paths.",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "Website provides clearity of learning goals , objectives and outcomes",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},
{
  question:
    "Website provides learner to find their own learning pathways",
  options: ["Yes", "Room for improvement", "No", "Not Applicable"],
  scores: [2, 1, 0, -1],
  qCat: "amainquestions",
},

    // Add more questions here
  ]);

  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(Array(questions.length).fill(0));
  const [selectedOption, setSelectedOption] = useState(null);
  const qCatValues = [...new Set(questions.map((q) => q.qCat))];

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
      let questionScores = [];
      const categoryApplicableCounts = {};

      questions.forEach(({ qCat, scores }, index) => {
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

        // questionScores[index] = questions[index].qCat + " " + questions[index].question + " " + score;
        questionScores[index] =
          questions[index].qCat + " " + questions[index].question + " " + score;
        // category: questions[index].qCat,
        // question: questions[index].question,
        // score: score,
      });
      console.log("Question Scores:", questionScores);

      setUserData({
        ...userData,
        rresult: categoryScores, //category wise score
        //roverall: newScores, //all questions' individual score
        rvalid: applicable,
        //rquestionScores: categoryQuestionScores, //scores for each individual question in qCat
        categoryRValid: categoryApplicableCounts,
        rquestionScores: questionScores, // new
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
  };

  
  const handleTabClick = (qCat) => {
    const index = questions.findIndex((q) => q.qCat === qCat);
    setCurrentQuestion(index);
    setSelectedOption(null);
    // scroll to the top of the page to show the selected question
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <div style={{ marginLeft: "6%" }}>
        <h2>
          {props.websiteName} | {props.websiteUrl}
        </h2>
      </div>
      <div className="tab-container" >
      <div
    className={`tab ${currentQuestion < 6 ? "active" : ""}`}
    onClick={() => handleTabClick("First Impression")}
  >
    First Impression
  </div>
      <div
    className={`tab ${currentQuestion > 5 && currentQuestion < 8 ? "active" : ""}`}
    onClick={() => handleTabClick("Navigation")}
  >
    Navigation
  </div>
  <div
    className={`tab ${currentQuestion > 7 && currentQuestion < 12 ? "active" : ""}`}
    onClick={() => handleTabClick("Forms")}
  >
    Forms
  </div>
  <div
    className={`tab ${currentQuestion > 11 && currentQuestion < 16 ? "active" : ""}`}
    onClick={() => handleTabClick("Search")}
  >
    Search
  </div>
  <div
    className={`tab ${currentQuestion > 15 && currentQuestion < 22 ? "active" : ""}`}
    onClick={() => handleTabClick("Information")}
  >
    Information
  </div>
  <div
    className={`tab ${currentQuestion > 21 && currentQuestion < 27 ? "active" : ""}`}
    onClick={() => handleTabClick("Trust and Persuasion")}
  >
    Trust and Persuasion
  </div>
  <div
    className={`tab ${currentQuestion > 26 && currentQuestion < 32 ? "active" : ""}`}
    onClick={() => handleTabClick("Interaction")}
  >
    Interaction
  </div>
  <div
    className={`tab ${currentQuestion > 31  ? "active" : ""}`}
    onClick={() => handleTabClick("amainquestions")}
  >
    ELearning
  </div>
        </div>

      <div className="quiz-container col-md-auto " style={{ backgroundColor: '#fff' }}>
        <form method="POST" onSubmit={handleNext} style={{width: "90%"}}>
          <br />
          <h4>{questions[currentQuestion].qCat === 'amainquestions' ? 'E-Learning' : questions[currentQuestion].qCat}</h4>
          <hr></hr>
          <br />
          <div className="que-cont">
            {" "}
            <h4 className="h3-gap">
              {currentQuestion + 1}.{questions[currentQuestion].question}
            </h4>{" "}
          </div>
          <div className="container">
            <div className="row g-6" style={{ marginTop: "2%" }}>
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  className={`col-sm ${
                    selectedOption === index ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index)}
                  key={index}
                >
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex" style={{ display: "flex" }}>
            <div className="option-container">
              {currentQuestion > 0 && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
            </div>
            <div className="option-container">
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={selectedOption === null}
              >
                {currentQuestion < questions.length - 1
                  ? "Save & Next"
                  : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
  
};

export default Form2;
