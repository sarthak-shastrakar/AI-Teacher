import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function DRDO() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">SET</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Scientist Entry Test: Recruits scientists for various DRDO labs and
            establishments. Often involves written tests, interviews, and
            sometimes presentations, focusing on specific scientific
            disciplines.
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
            <Typography component="span">TO/AR</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Technical Officer/Assistant Recruitment: Recruits technical
            personnel for supporting roles in research and development. May
            involve written exams, skill tests, and interviews, depending on
            the specific role.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default DRDO;
