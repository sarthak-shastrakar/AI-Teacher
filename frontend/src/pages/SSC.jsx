import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function SSC() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span"> SSC CGL</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Combined Graduate Level Examination (CGL): Recruits graduates for
            various Group B and C posts in different government ministries and
            departments. A multi-stage exam covering quantitative aptitude,
            reasoning, English, and general awareness.
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
            <Typography component="span"> SSC CHSL</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Combined Higher Secondary Level Examination (CHSL): Recruits
            candidates who have passed 12th standard for Lower Division Clerk,
            Data Entry Operator, and other similar posts. Involves a written
            exam and a skill test (typing/data entry).
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
            <Typography component="span"> SSC MTS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Multi-Tasking (Non-Technical) Staff (MTS): Recruits candidates for
            non-technical Group C posts in various government offices. A
            relatively simpler exam focusing on basic aptitude, reasoning, and
            English language skills.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default SSC;
