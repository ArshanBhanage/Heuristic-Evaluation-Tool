import React, { useState, useEffect } from 'react'

const Results = (props) => {
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


  //useEffect function is run first when we open a page 
  // here used to refresh page
  useEffect(() => {
      userEvaluator();
    
  }, []);

  //
   const myArray = resultData.websites[resultData.websites.length-1];
   console.log(myArray);
  //overall percent
  if(myArray !== undefined){
  const overAlll = myArray.roverall;
  const overAll = Object.values(overAlll);
  const sum = overAll.reduce((acc, curr) => curr >= 0 ? acc + curr : acc, 0);
  const totalOverAllMarks = myArray.rvalid * 2;
  const overAllPercent = sum/totalOverAllMarks * 100;
  console.log("Over Percent", overAllPercent);
  //overall percent
  
  //main category
    let section = Object.keys(myArray.rresult);
    let sectionScores = Object.values(myArray.rresult);
    let catWiseTotalQ = Object.values(myArray.categoryRValid);
    let catPercent= [];
    console.log(catWiseTotalQ);
    console.log(section);
    console.log(sectionScores);
  //main category
    for(let i =0; i<sectionScores.length; i++){
      
      let f = sectionScores[i]/ (catWiseTotalQ[i] * 2) * 100; 
      catPercent.push(f);
    }
    console.log(catPercent);


  }
  

  
 
  return (
    <div>
      
    </div>
  )
}

export default Results
