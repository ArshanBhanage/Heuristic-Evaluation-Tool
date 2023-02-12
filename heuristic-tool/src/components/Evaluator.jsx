import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function Evaluator() {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const [scores, setScores] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
  });

  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    switch (e.target.name) {
      case "question1":
        if (e.target.value === "option1") {
          setScores({ ...scores, question1: 1 });
        } else {
          setScores({ ...scores, question1: 0 });
        }
        break;
      case "question2":
        if (e.target.value === "option1") {
          setScores({ ...scores, question2: 1 });
        } else {
          setScores({ ...scores, question2: 0 });
        }
        break;
      case "question3":
        if (e.target.value === "option1") {
          setScores({ ...scores, question3: 1 });
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
    console.log(formData);
  };

  return (
    <Form className="questionnaire" onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formQuestion1">
        <Form.Label column sm={2}>
          Question 1
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Option 1"
            name="question1"
            value="option1"
            onChange={handleRadioChange}
            checked={formData.question1 === "option1"}
            required
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="question1"
            value="option2"
            onChange={handleRadioChange}
            checked={formData.question1 === "option2"}
            required
          />
          <Form.Check
            type="radio"
            label="Option 3"
            name="question1"
            value="option3"
            onChange={handleRadioChange}
            checked={formData.question1 === "option3"}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formQuestion2">
        <Form.Label column sm={2}>
          Question 2
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Option 1"
            name="question2"
            value="option1"
            onChange={handleRadioChange}
            checked={formData.question2 === "option1"}
            required
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="question2"
            value="option2"
            onChange={handleRadioChange}
            checked={formData.question2 === "option2"}
            required
          />
          <Form.Check
            type="radio"
            label="Option 3"
            name="question2"
            value="option3"
            onChange={handleRadioChange}
            checked={formData.question2 === "option3"}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formQuestion3">
        <Form.Label column sm={2}>
          Question 3
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="Option 1"
            name="question3"
            value="option1"
            onChange={handleRadioChange}
            checked={formData.question3 === "option1"}
            required
              />
              <Form.Check
                type="radio"
                label="Option 2"
                name="question3"
                value="option2"
                onChange={handleRadioChange}
                checked={formData.question3 === "option2"}
                required
              />
              <Form.Check
                type="radio"
                label="Option 3"
                name="question3"
                value="option3"
                onChange={handleRadioChange}
                checked={formData.question3 === "option3"}
                required
              />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      );
    }
    
    export default Evaluator;
    