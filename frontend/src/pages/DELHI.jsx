import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function DELHI() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">CONSTABLE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Delhi Police Constable: Recruits constables through a process
            involving physical tests (endurance, measurements), a written exam,
            and sometimes a computer-based test. Focus is on basic aptitude,
            reasoning, and physical fitness.
          </AccordionDetails>
        </Accordion>
      </div>
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">SUB - INSPECTOR</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Delhi Police Sub-Inspector: Recruits sub-inspectors, often
            graduates, through a selection process including physical tests, a
            written exam, and an interview. The written exam assesses a broader
            range of knowledge and analytical skills.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default DELHI;
