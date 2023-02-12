import React, { useState } from 'react';

const Form1 = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    // Save the sum to a database or display it on the page
    console.log(sum);
  };

  return (
    <div className="quiz-container col-md-auto ">
      <form onSubmit={handleSubmit}>

    <div>
      
    </div>

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
};

const Form2 = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    // Save the sum to a database or display it on the page
    console.log(sum);
  };

  return (
    <div className="quiz-container col-md-auto ">
      <form onSubmit={handleSubmit}>

    <div>
      
    </div>

      <h3 className = "h3-gap" >Question 1111</h3>
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
};



const Evaluator = () => {
  const [selectedForm, setSelectedForm] = useState(1);
  const [websiteName, setWebsiteName] = useState("");

  const handleSubmit = () => {
    if (websiteName) {
      setSelectedForm(selectedForm === 1 ? 2 : 1);
      console.log(selectedForm);
      console.log(websiteName);
    }
  };

  return (
    <div className='web-name'>
      <div>
        Website Name: <input type="text" value={websiteName} onChange={e => setWebsiteName(e.target.value)} />
      </div>
      <div>
        Form:
        <select value={selectedForm} onChange={e => setSelectedForm(e.target.value)}>
          <option value={0}>Select a form</option>
          <option value={1}>Form 1</option>
          <option value={2}>Form 2</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {selectedForm === 1 ? <Form1 /> : selectedForm === 2 ? <Form2 /> : null}
    </div>
  );
};

export default Evaluator;
