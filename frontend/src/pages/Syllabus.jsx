import React from 'react'
import "../styles/Papers.css";


function Syllabus() {
  return (
    <div className="container">
      <div className="book">
        <a href="/CGL SYLLABUS.pdf" target="_blank">SSC-CGL</a> 
        <a href="/SSC CHSL.pdf" target="_blank">SSC-CHSL</a>
        <a href="/SSC GD SYLLABUS.pdf" target="_blank">SSC-GD</a>
        <div className="cover">
          <p>SSC</p>
        </div>
      </div>
      <div className="book">
      <a href="/RRB NTPC.pdf" target="_blank">RRB-NTPC</a>
        <a href="/RRB-ALP.pdf" target="_blank">RRB-ALP</a>
        <a href="/RRB-Group-D.pdf" target="_blank">RRB-GROUP-D</a>
        <div className="cover">
          <p>RRB</p>
        </div>
      </div>
      <div className="book">
      <a href="/IBPS-PO.pdf" target="_blank">IBPS-PO</a> 
        <a href="/IBPS-SO.pdf" target="_blank">IBPS-SO</a>
        <a href="/IBPS CLEARK.pdf" target="_blank">CLEARK IBPS</a>
        <div className="cover">
          <p>BANKING</p>
        </div>
      </div>
      <div className="book">
        <a href="/NDA-Syllabus.pdf" target="_blank">NDA</a> 
        <div className="cover">
          <p>NDA</p>
        </div>
      </div>
    </div>
  )
}

export default Syllabus