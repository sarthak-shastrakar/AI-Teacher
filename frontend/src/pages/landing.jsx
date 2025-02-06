import React from "react";
import "../App.css";
 import "../styles/Responsive.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>AI Tutor</h2>
        </div>
        <div className="navlist">
          {/* <p
            onClick={() => {
              router("/aljk23");
            }}
          >
            Join as Guest
          </p> */}
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>Ace Your Exam With AI Tutoring.</h1>
          <p>Data-Driven Insights for Continuous Improvement</p>

          <div className="scene">
            <div className="cube">
              <Link className="side top" to={"/auth"}>
                START
              </Link>
              <span className="side front">GET Start's</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
