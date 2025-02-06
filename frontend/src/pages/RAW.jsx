import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function RAW() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">IB ACIO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            IB ACIO Exam: This exam recruits Assistant Central Intelligence
            Officers (ACIOs) for the Intelligence Bureau. It involves written
            exams, interviews, and potentially other assessments to evaluate
            analytical and intelligence-gathering skills.
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
            <Typography component="span"> RECRUITMENT</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Recruitment: The IB also recruits through other channels, including
            deputation from other government services and direct recruitment of
            specialists (e.g., linguists, cyber experts).
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default RAW;
