import React, { useState, useEffect } from 'react';
import axios from "axios"
const Form1 = (props) => {


  const [userData, setUserData] = useState({name:"", email: "", phone: "", company: "", website: "", result: 0 });

  const userEvaluator = async () => {
    try{
      // axios can also be used in place of fetch
      const res = await axios.get('/getData', 
        {
          headers: {
          "Content-Type": "application/json"
        },

        });
        console.log(JSON.stringify(res.data));
        const data = res.data;
        setUserData({ ...userData, name:data.name, email:data.email, phone:data.phone, company:data.company });

        if(res.status !== 200){
          const error = new Error(res.error);
          throw error;
        }
        
    }catch (err){
      console.log(err);
    }
  }


  //useEffect function is run first when we open a page 
  // here used to refresh page
  useEffect(() => {
    
      userEvaluator();
    
  }, []);


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
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    // Save the sum to a database or display it on the page
        setUserData({...userData, website: props.websiteName, result: sum});
    //console.log(finalScore);
        console.log(sum);
        console.log(props.websiteName);

        //sending to database
        const {name, email, company, phone, website, result} = userData;
        console.log(userData);
        const res = await axios.post('/tool', 
        {
            name, email, company, phone, website, result
        });
        const data = await res.data;
        console.log(data);

        if(!data){
          console.log("data not updated");
        }else{
          //later change alert to navigate tpo result page
          alert("evaluated website successfully and stored data to db");
          //setUserData({...userData, website: "", result: 0});
        }
      };
    
  return (
      
        <div className="quiz-container col-md-auto ">
          <form  method='POST' onSubmit={handleSubmit}>
    
        <div>
          
        </div>
        <h1>this is E-commerce {props.websiteName}</h1>
          <h3 className = "h3-gap" >Question 1</h3>
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
    
}

export default Form1
