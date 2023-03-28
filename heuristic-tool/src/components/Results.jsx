import React, { useState, useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js';
import { useNavigate, useLocation } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  organization: "org-dNxmk6KmZAwM7yefcMh2KTqY",
  apiKey: "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",
});

const openai = new OpenAIApi(config);

const questions = [
  {
    question: "Are product descriptions clear and detailed with high-quality images?",
    option: "yes",
    category: "E-Commerce",
  },
  {
    question: "Is the website easy to navigate and find what you're looking for?",
    option: "no",
    category: "E-Commerce",
  },
];


const Results = () => {
  const [resultData, setResultData] = useState({ websites: [] });
  const componentRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const props = location.state;

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const generateFeedback = async () => {
      const results = [];

      for (let i = 0; i < questions.length; i++) {
        const { question, option, category } = questions[i];

        const prompt =
          "Question: " +
          question +
          " Option selected: " +
          option +
          ", Website Category: " +
          category +
          ", Based on Ben Schneiderman's golden rules and Jakob Nielsen's heuristics combined, you are an evaluator ,give proper feedback to the question and option selected ";

        const response = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: prompt,
          max_tokens: 2048,
          temperature: 0.1,
        });

        results.push({
          question: question,
          feedback: response.data.choices[0].text,
        });
      }

      setFeedbacks(results);
    };

    generateFeedback();
  }, []);

  
  function handleExit() {
    navigate('/');
  }


  const handleDownloadPdf = () => {
    const input = componentRef.current;
    html2pdf(input, {
      margin: 0.5,
      filename: 'mypage.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { avoid: ['.pagebreak'] },
    });
  };

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
      setResultData({ ...resultData, websites: data.websites });
  
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userEvaluator();
  }, []);

  if (resultData.websites.length === 0) {
    return <div>Loading...</div>;
  }

  
  let myIndex = resultData.websites.length-1;
  console.log(myIndex);
  if(props){
    myIndex = props.prop1;
    console.log("My prop", myIndex);
  }
  
  let myArray = resultData.websites[myIndex];  
  console.log("myArray", myArray);

  if (myArray !== undefined) {
    const overAlll = myArray.rresult;
    const overAll = Object.values(overAlll);
    const sum = overAll.reduce((acc, curr) => curr >= 0 ? acc + curr : acc, 0);
    const totalOverAllMarks = myArray.rvalid * 2;
    const overAllPercent = (sum / totalOverAllMarks * 100).toFixed(0);

    let section = Object.keys(myArray.rresult);
    let sectionScores = Object.values(myArray.rresult);
    let catWiseTotalQ = Object.values(myArray.categoryRValid);
    let catPercent = [];

    for(let i = 0; i < sectionScores.length; i++){
      let f = (sectionScores[i] / (catWiseTotalQ[i] * 2) * 100).toFixed(0); 
      catPercent.push(f);
    }

    return (
      <div className="result-outer">

      <div className="row">
        <h3>{resultData.websites[myIndex].website}</h3>
      </div>
      <div className="row" style={{marginBottom: "3%"}}>
        <h3>{resultData.websites[myIndex].websiteUrl}</h3>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-warning" onClick={handleExit}>Exit</button>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={handleDownloadPdf}>Download PDF</button>
        </div>
      </div>
    
      <div ref={componentRef}>
        <div className="card-name text-dark bg-light mb-3">
          <div className="card-body-r">
            <div className="row align-items-start">
              <div className="col" style={{marginBottom: "3%"}}>
                <h3 className="card-title">Overall Score:</h3>
                <p className="card-text">
                  Overall the website reviewed scored well in this heuristic evaluation.
                  This means that the majority of important UX elements were in place and working well. However, there is still room for improvement as any one of the areas reviewed could make a big impact on the performance of your business.
                  It is best to review the below information to understand the specific areas or themes that still require improvement. From this you can draw up a list of things to improve. Consider elements which are at the beginning of the journey as higher priority. You can then reassess your website by doing another heuristic evaluation once the improvements have been made.
                </p>
              </div>
              <div className="col">
                <div className="circular-pro" style={{ width: '200px' }}>
                  <CircularProgressbar  value={overAllPercent} text={`${overAllPercent}%`} strokeWidth={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {section.map((sectionName, index) => (
  <div key={index} className="card-name text-dark bg-light mb-3">
    <div className="card-body-r">
    {index === 0 ? (
        <h3 className="card-title">{resultData.websites[myIndex].quesCat}</h3>
      ) : (
        <h3 className="card-title">{sectionName}</h3>
      )}
      <div className='row'>
        <div className='col'>
        {index === 0 ? (
            <p className="card-text">
              Special content for first section.
            </p>
          ) : index === 1 ? (
            <p className="card-text">
              Special content for second section.
            </p>
          ) : index === 2 ? (
            <p className="card-text">
              Special content for third section.
            </p>
          ) : (
            <p className="card-text">
              Default content for all other sections.
            </p>
          )}
        </div>
        <div className='col'>
          <div className="circular-pro" style={{ width: '160px' }}>
            <CircularProgressbar value={catPercent[index]} text={`${catPercent[index]}%`} strokeWidth={5} />
          </div>
        </div>
      </div>
    </div>
  </div>
))}

    
      </div>
      <div>
      <h1>OpenAI Feedback Generator</h1>
      {feedbacks.map((feedback, index) => (
        <div key={index}>
          <h3>{feedback.question}</h3>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
    </div>
    );
  }

  return null;
}

export default Results;
