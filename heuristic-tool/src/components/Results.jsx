import React, { useState, useEffect, useRef } from 'react'
//import html2pdf from 'html2pdf.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Results = () => {
  const [resultData, setResultData] = useState({ websites: [] });

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

  const myArray = resultData.websites[resultData.websites.length-1]; //for the latest entry in db

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
      <div className='result-outer'>

<div className='row'><h3>{resultData.websites[resultData.websites.length-1].website}</h3></div>
<div className='row' style={{marginBottom: "3%"}}><h3>{resultData.websites[resultData.websites.length-1].websiteUrl}</h3></div>
<div className='row'>
  <div className='col'><button className='btn btn-warning'>Exit</button></div>
  <div className='col'><button className='btn btn-success'>Download PDF</button></div>
</div>
<div className="card-name text-dark bg-light mb-3">
  <div className="card-body-r">
    
    <div className="row align-items-start">
    <div className="col" style={{marginBottom: "3%"}}>
    <h3 className="card-title">Overall Score:</h3>
    <p className="card-text">Overall the website reviewed scored well in this heuristic evaluation.

This means that the majority of important UX elements were in place and working well. However, there is still room for improvement as any one of the areas reviewed could make a big impact on the performance of your business.

It is best to review the below information to understand the specific areas or themes that still require improvement. From this you can draw up a list of things to improve. Consider elements which are at the beginning of the journey as higher priority. You can then reassess
 your website by doing another heuristic evaluation once the improvements have been made.</p>
    </div>
    <div className="col">
    <div className='circular-pro' style={{ width: '200px' }}>
    <CircularProgressbar  value={overAllPercent} text={`${overAllPercent}%`} strokeWidth={5} />
  </div>
    </div>
  </div>
  </div>
</div>
  

<div className="card-name text-dark bg-light mb-3">
  <div className="card-body-r">
  <div className="row align-items-center">
    <div className="col">
      {section.map((sectionName, index) => (
            <div className='cat' key={index}>
              <h3>{sectionName}</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card </p>
              <hr />
            </div>
          ))}
    </div>
    <div className="col">
    {section.map((sectionName, index) => (
            <div className='cat' key={index}>
              <div className='circular-pro' style={{ width: '160px' }}>
    <CircularProgressbar value={catPercent[index]} text={`${catPercent[index]}%`} strokeWidth={5} />
  </div> <hr />
   </div>
          ))}
    </div>
  </div>
  </div>
  </div>
 
      </div>
    );
  }

  return null;
}

export default Results;
