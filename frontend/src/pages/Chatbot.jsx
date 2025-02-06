import React from "react";
import { useState, useEffect } from "react";
import "../styles/Chatbot.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
// import { chatAnimation } from "../chatbot/Animation";
// import { chatbot} from "../chatbot/Chatbot";

export default function Chatbot() {
  const routeTo = useNavigate();

  const API_KEY = "AIzaSyD_N7VHKTfjcLXvLvO9eNfTq24EurdfhRI";
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  const [chatmessages, setChatmessages] = useState([]);
  const [userinput, setUserinput] = useState("");

  const generateResponse = async (prompt) => {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate response");
    }
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  const clearmarkdowntext = (text) => {
    return text
      .replace(/#{1,6}\s?/g, "")

      .replace(/\\/g, "")

      .replace(/\n{3,}/g, "\n\n")

      .trim();
  };

  const addmessage = () =>{
    
  }

  //   const chatMessages = document.getElementById("chat-messages");
  //   const userInput = document.getElementById("user-input");
  //   const sendButton = document.getElementById("send-button");
  //   async function generateResponse(prompt) {
  //     const response = await fetch(`${API_URL}?key=${API_KEY}`, {
  //       method: "POST",

  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({
  //         contents: [
  //           {
  //             parts: [
  //               {
  //                 text: prompt,
  //               },
  //             ],
  //           },
  //         ],
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to generate response");
  //     }
  //     const data = await response.json();
  //     return data.candidates[0].content.parts[0].text;
  //   }
  //   function cleanMarkdown(text) {
  //     return text
  //       .replace(/#{1,6}\s?/g, "")

  //       .replace(/\\/g, "")

  //       .replace(/\n{3,}/g, "\n\n")

  //       .trim();
  //   }
  //   function addMessage(message, isUser) {
  //     const messageElement = document.createElement("div");
  //     messageElement.classList.add("message");
  //     messageElement.classList.add(isUser ? "user-message" : "bot-message");
  //     const profileImage = document.createElement("img");
  //     profileImage.classList.add("profile-image");
  //     profileImage.src = isUser ? "boy.png" : "assistant.png";
  //     profileImage.alt = isUser ? "User" : "Bot";
  //     const messageContent = document.createElement("div");
  //     messageContent.classList.add("message-content");
  //     messageContent.textContent = message;
  //     messageElement.appendChild(profileImage);
  //     messageElement.appendChild(messageContent);
  //     chatMessages.appendChild(messageElement);
  //     chatMessages.scrollTop = chatMessages.scrollHeight;
  //   }
  //   async function handleUserInput() {
  //     const userMessage = userInput.value.trim();
  //     if (userMessage) {
  //       addMessage(userMessage, true);
  //       userInput.value = "";
  //       sendButton.disabled = true;
  //       userInput.disabled = true;
  //       try {
  //         const botMessage = await generateResponse(userMessage);
  //         addMessage(cleanMarkdown(botMessage), false);
  //       } catch (error) {
  //         console.error("Error:", error);
  //         addMessage("Sorry, I encountered an error. Please try again.", false);
  //       } finally {
  //         sendButton.disabled = false;
  //         userInput.disabled = false;
  //         userInput.focus();
  //       }
  //     }
  //   }
  //   sendButton.addEventListener("click", handleUserInput);
  //   userInput.addEventListener("keypress", (e) => {
  //     if (e.key === "Enter" && !e.shiftKey) {
  //       e.preventDefault();
  //       handleUserInput();
  //     }
  //   });

  return (
    <>
      <div className="Header">
        <IconButton
          onClick={() => {
            routeTo("/home");
          }}
        >
          <HomeIcon />
        </IconButton>

        <h1>Personal Ai assistant</h1>
      </div>

      <div id="stars-container">
        <div class="chat-container">
          <div class="chat-header">
            <h1>Personal Chatbot</h1>
            <button>Listen</button>
          </div>
          <div className="chat-messages" id="chat-messages"></div>
          <div className="chat-input-container">
            <input
              type="text"
              id="user-input"
              className="input"
              placeholder="Type your message..."
            />
            <button id="send-button" className="btn">
              Send
            </button>
          </div>
        </div>

      </div>
    </>
  );
}



