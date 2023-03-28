import React, { useState, useEffect } from "react";
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

const OpenAiFeedback = () => {
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

  return (
    <div>
      <h1>OpenAI Feedback Generator</h1>
      {feedbacks.map((feedback, index) => (
        <div key={index}>
          <h3>{feedback.question}</h3>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default OpenAiFeedback;
