import React from 'react'
import { Link } from 'react-router-dom'; // if you're using React Router for routing


const About = () => {
  return (
    <div className="landing-page">
      <h1>Website Evaluation Tool</h1>
      <p>Answer a few questions to evaluate your website's usability and get feedback.</p>
      <Link to="/evaluation">
        <button className="start-button">Start Evaluation</button>
      </Link>
    </div>
  );
}

export default About


