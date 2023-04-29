import React, { useState, useEffect, useRef } from 'react'
import html2pdf from 'html2pdf.js';
import { useNavigate, useLocation } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Backtotop from './Backtotop';
// import backgroundImage from '../images/design1.jpg';

// const backgroundStyle = {
//   background: `url(${backgroundImage}) repeat`,
// };

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  organization: "org-dNxmk6KmZAwM7yefcMh2KTqY",
  apiKey: process.env.React_App_OPENAI,
});

const openai = new OpenAIApi(config);




const Results = () => {
  const [resultData, setResultData] = useState({ websites: [] });
  const componentRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const props = location.state;


  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    userEvaluator();
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
      html2canvas: { dpi: 300, letterRendering: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { avoid: ['.pagebreak'] },
    });
  };
 
  const userEvaluator = async () => {
    const fetchData = async () => {
    try {
      const res = await fetch('/getData', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
       console.log(data);
       //

       let index = data.websites.length-1;
  
       console.log("Index from useEffect: ", index);
   console.log(index);
   if(props){ 
     index = props.prop1; 
   }
   
   let gptArray = data.websites[index];
     
   let forFeedback = Object.values(gptArray.rquestionScores);
   let words = forFeedback.reduce((acc, string) => {
     let splitWords = string.split(' ');
     let quesSec = splitWords[0];
     let userResponse = splitWords[splitWords.length - 1];
     if (userResponse === '1') {
       userResponse = 'Room for Improvement';
     } else if (userResponse === '0') {
       userResponse = 'No';
     } else {
       return acc; // skip "Yes" responses
     }
     let question = splitWords.slice(1, splitWords.length - 1).join(' ');
     acc.push({ quesSec, userResponse, question });
     return acc;
   }, []);
   

     const generateFeedback = async () => {
       
       const results = [];
       let donts = "dont mention the category in result, dont give fullstops before start of the sentence, dont mention Ben Schneiderman and Jakob Nielsen in feedback.";
   
       for (let i = 0; i < words.length; i++) {
         let { question, userResponse, quesSec } = words[i]; 
         if(quesSec === "amainquestions"){
           quesSec = gptArray.quesCat;
           console.log(quesSec);
         }
         const prompt =
           "Question: " +
           question + 
           " Option selected: " + 
           userResponse +
           ", Website Category: " +
           quesSec +
           ", Based on Ben Schneiderman's golden rules and Jakob Nielsen's heuristics combined, give feedback to the question and option selected and provide ways to improve and also tell how that feature can be implemented if no is selected , " + donts;
   
         const response = await openai.createCompletion({
           model: "text-davinci-002",
           prompt: prompt,
           max_tokens: 1024,
           temperature: 0.1,
         });
   
         results.push({
           question: question,
           quesSec: quesSec,
           feedback: response.data.choices[0].text,
         });
       }
       console.log(results);
       setFeedbacks(results);
     };
     
     
     generateFeedback();
   

       //
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
     setResultData({ ...resultData, websites: data.websites });
     
     console.log(resultData); 
  
    } catch (err) {
      console.log(err);
    } 
  }
   await fetchData();
    
    
  }


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
  // console.log("myArray", myArray);

  if (myArray !== undefined) {
    const overAlll = myArray.rresult;
    const overAll = Object.values(overAlll);
    const sum = overAll.reduce((acc, curr) => curr >= 0 ? acc + curr : acc, 0);
    const totalOverAllMarks = myArray.rvalid * 2;
    const overAllPercent = (sum / totalOverAllMarks * 100).toFixed(0);

    let section = Object.keys(myArray.rresult);
    let sectionScores = Object.values(myArray.rresult);
    console.log("Section scores: ", sectionScores);
    let catWiseTotalQ = Object.values(myArray.categoryRValid);
    console.log("Category wise valid q: ", catWiseTotalQ);
    let catPercent = [];

    for(let i = 0; i < sectionScores.length; i++){
      let f = (sectionScores[i] / (catWiseTotalQ[i] * 2) * 100).toFixed(0); 
      catPercent.push(f);
    }
    console.log(catPercent);


    

    return (
      <>
      {/* <div style={backgroundStyle}> */}
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
                <h5 className='card-text' style={{fontWeight: "initial"}}>
                  Overall the website reviewed scored well in this heuristic evaluation.
                  This means that the majority of important UX elements were in place and working well. However, there is still room for improvement as any one of the areas reviewed could make a big impact on the performance of your business.
                  It is best to review the below information to understand the specific areas or themes that still require improvement. From this you can draw up a list of things to improve. Consider elements which are at the beginning of the journey as higher priority. You can then reassess your website by doing another heuristic evaluation once the improvements have been made.
                </h5>
              </div>
              <div className="col">
                <div className="circular-pro" style={{ width: '40%' }}>
                  <CircularProgressbar  value={overAllPercent} text={`${overAllPercent}%`} strokeWidth={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {section.map((sectionName, index) => (
  <div key={index} className="card-name text-dark bg-light mb-3">
    <div className="card-body-r">
      <div className='row'>
        <div className='col-8'>
        <div className='result-section-name'>
    {index === 0 ? (
        <h3 className="card-title">{resultData.websites[myIndex].quesCat}</h3>
      ) : (
        <h3 className="card-title">{sectionName}</h3>
      )}
    </div>
    {index === 0 && resultData.websites[myIndex].quesCat === "E-Learning" ? (
  // E-Learning feedbacks rendering
<h6 className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === "E-Learning" ).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
          
        </div>
      ))}
            </h6>
) : index === 0 && resultData.websites[myIndex].quesCat === "E-Commerce" ? (
  // E-Learning feedbacks rendering
<h6 className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === "E-Commerce" ).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
          
        </div>
      ))}
            </h6>
) : index === 1 ? (
  // Feedbacks rendering for index 1
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === "First").map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
) : index === 2 ? (
  // Feedbacks rendering for index 2
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === sectionName).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
) : index === 3 ? (
  // Feedbacks rendering for index 2
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === sectionName).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
): index === 4 ? (
  // E-Learning feedbacks rendering
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === sectionName).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
) : index === 5 ? (
  // Feedbacks rendering for index 2
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === sectionName).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
): index === 6 ? (
  // Feedbacks rendering for index 2
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === sectionName).map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
): index === 7 ? (
  // Feedbacks rendering for index 2
<p className="card-text">
              {feedbacks.filter((feedback) => feedback.quesSec === "Trust").map((feedback, index) => (
        <div key={index}>
          <h5>Q: {feedback.question}</h5>
          <h5 style={{fontWeight: "initial"}}><span className="material-symbols-outlined" style={{color: 'yellowgreen'}}>
warning
</span>{feedback.feedback}</h5><br/>
        </div>
      ))}
            </p>
) : (
  // Default content for all other sections
<p className="card-text">
              Default content for all other sections.
            </p>
)}
        </div>
        <div className='col'>
          <div className="circular-pro" style={{ width: '50%' }}>
            <CircularProgressbar value={catPercent[index]} text={`${catPercent[index]}%`} strokeWidth={5} />
          </div>
        </div>
      </div>
    </div>
  </div> 
))}
    
      </div>      
<Backtotop />
    </div> 
    {/* </div> */}
    </>
    );
  }

  return null;
}

export default Results;
