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
        question4: 0,
        question5: 0,
        question6: 0,
        question7: 0,
        question8: 0,
        question9: 0,
        question10: 0,
        question11: 0,
        question12: 0,
        question13: 0,
      });
// yes +2, room for improvement +1,no 0, not applicable

      const handleOptionChange = (e) => {
        switch (e.target.name) {
          case "question1":
            if (e.target.value === "option1") {
              setScores({ ...scores, question1: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question1: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question1: 0.3 });
            } else {
              setScores({ ...scores, question1: 0 });
            }
            break;
          case "question2":
            if (e.target.value === "option1") {
              setScores({ ...scores, question2: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question2: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question2: 0.3 });
            } else {
              setScores({ ...scores, question2: 0 });
            }
            break;
          case "question3":
            if (e.target.value === "option1") {
              setScores({ ...scores, question3: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question3: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question3: 0.3 });
            } else {
              setScores({ ...scores, question3: 0 });
            }
            break;
            case "question4":
            if (e.target.value === "option1") {
              setScores({ ...scores, question4: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question4: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question4: 0.3 });
            } else {
              setScores({ ...scores, question4: 0 });
            }
            break;
            case "question5":
            if (e.target.value === "option1") {
              setScores({ ...scores, question5: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question5: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question5: 0.3 });
            } else {
              setScores({ ...scores, question5: 0 });
            }
            break;
            case "question6":
            if (e.target.value === "option1") {
              setScores({ ...scores, question6: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question6: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question6: 0.3 });
            } else {
              setScores({ ...scores, question6: 0 });
            }
            break;
            case "question7":
            if (e.target.value === "option1") {
              setScores({ ...scores, question7: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question7: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question7: 0.3 });
            } else {
              setScores({ ...scores, question7: 0 });
            }
            break;
            case "question8":
            if (e.target.value === "option1") {
              setScores({ ...scores, question8: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question8: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question8: 0.3 });
            } else {
              setScores({ ...scores, question8: 0 });
            }
            break;
            case "question9":
            if (e.target.value === "option1") {
              setScores({ ...scores, question9: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question9: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question9: 0.3 });
            } else {
              setScores({ ...scores, question9: 0 });
            }
            break;
            case "question10":
            if (e.target.value === "option1") {
              setScores({ ...scores, question10: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question10: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question10: 0.3 });
            } else {
              setScores({ ...scores, question10: 0 });
            }
            break;
            case "question11":
            if (e.target.value === "option1") {
              setScores({ ...scores, question11: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question11: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question11: 0.3 });
            } else {
              setScores({ ...scores, question11: 0 });
            }
            break;
            case "question12":
            if (e.target.value === "option1") {
              setScores({ ...scores, question12: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question12: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question12: 0.3 });
            } else {
              setScores({ ...scores, question12: 0 });
            }
            break;
            case "question13":
            if (e.target.value === "option1") {
              setScores({ ...scores, question13: 1 });
            } else if (e.target.value === "option2") {
              setScores({ ...scores, question13: 0.5 });
            } else if (e.target.value === "option3") {
              setScores({ ...scores, question13: 0.3 });
            } else {
              setScores({ ...scores, question13: 0 });
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
        <h1>{props.websiteName}</h1>
          <h5 className = "h3-gap" >1. Are product descriptions clear and detailed with high-quality images?</h5>
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
            Yes
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
            Room for improvement
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
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question1"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>  
    
          <h5 className = "h3-gap" >2. Is the shopping cart easily accessible and clearly shows items added?</h5>
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
            Yes
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
            Room for improvement
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
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question2"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div><hr></hr>
    </div>
          <h5 className = "h3-gap" >3. Are the steps in the checkout process simple and straightforward?</h5>
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
            Yes
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
            Room for improvement
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
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question3"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >4. Are customer reviews and ratings visible and accessible?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question4"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question4"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question4"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question4"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >5. Are the learning objectives for each module/course clearly stated?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question5"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question5"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question5"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question5"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >6. On the homepage, is it clear what the business does and what the key benefits are for customers?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question6"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question6"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question6"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question6"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >7. The homepage contains most of my interest material and topics?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question7"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question7"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question7"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question7"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >8. Does the website have plenty of white space and feel uncluttered?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question8"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question8"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question8"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question8"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >9. Does the website feel current and up to date?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question9"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question9"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question9"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question9"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >10. It is easy to find the information I needed?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question10"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question10"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question10"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question10"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >11. It is easy to move around at this website by using the links or back button of the browser.</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question11"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question11"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question11"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question11"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >12. Do you always know where you are on the site?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question12"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question12"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question12"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question12"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
          </div>
        </div>
      </div>
    </div>
    <h5 className = "h3-gap" >13. Can you easily get back to the homepage and the previous page?</h5>
          <div className="container">
      <div className="row">
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question13"
              value="option1"
              onChange={handleOptionChange}
            />
            Yes
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question13"
              value="option2"
              onChange={handleOptionChange}
            />
            Room for improvement
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question13"
              value="option3"
              onChange={handleOptionChange}
            />
            No
          </div>
        </div>
        <div className="col-sm">
        <div className="quiz-form ">
            <input
              type="radio"
              name="question13"
              value="option4"
              onChange={handleOptionChange}
            />
            Not Applicable
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
