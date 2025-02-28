import React from 'react'
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chatbot() {

  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genAI = new GoogleGenerativeAI("AIzaSyD_N7VHKTfjcLXvLvO9eNfTq24EurdfhRI"); // Use environment variable
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "write a program in react.js to create search input";
        const result = await model.generateContent(prompt);
        setExplanation(result.response.text());
      } catch (error) {
        console.error("Error fetching AI explanation:", error);
        setExplanation("Error: Could not retrieve AI explanation."); // Display error message
      } finally {
        setLoading(false); // Set loading to false after fetching data or error
      }
    };

    fetchData();
  }, []);
  return (
    <div>
    <h2>AI Explanation</h2>
    {loading ? (
      <p>Loading AI explanation...</p>
    ) : (
      <p>{explanation}</p>
    )}
  </div>
  )
}

export default Chatbot