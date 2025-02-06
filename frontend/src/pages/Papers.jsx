import React from "react";
import "../styles/Papers.css";
// import Paper from "./public/ssc-2021.pdf";
function Papers() {
  return (
    <div className="container">
      <div className="book">
       <a href="/ssc-2021.pdf" target="_blank">SSC-2021</a> 
        <a href="/ssc-2022.pdf" target="_blank">SSC-22</a>
        <a href="/ssc-2023.pdf" target="_blank">SSC 23</a>
        <a href="/ssc-cgl-2024.pdf" target="_blank">SSC 24</a>
        <div className="cover">
          <p>SSC</p>
        </div>
      </div>
      <div className="book">
      <a href="/RRB-2021.pdf" target="_blank">RRB-2021</a> 
        <a href="/RRB 2023.pdf" target="_blank">RRB-2022</a>
        <a href="/RRB 2024.pdf" target="_blank">RRB-2023</a>
        <div className="cover">
          <p>RRB</p>
        </div>
      </div>
      <div className="book">
      <a href="/BANKING 2021.pdf" target="_blank">BANK-2021</a> 
        <a href="/BANKING 2022.pdf" target="_blank">BANK-2022</a>
        <a href="/BANKING 2023.pdf" target="_blank">BANK-2023</a>
        <div className="cover">
          <p>BANKING</p>
        </div>
      </div>
      <div className="book">
        <a href="/NDA 2021.pdf" target="_blank">NDA-2021</a> 
        <a href="/NDA 2022.pdf" target="_blank">NDA-2022</a>
        <a href="/NDA 2023.pdf" target="_blank">NDA-2023</a>
        <div className="cover">
          <p>NDA</p>
        </div>
      </div>
    </div>
  );
}

export default Papers;
