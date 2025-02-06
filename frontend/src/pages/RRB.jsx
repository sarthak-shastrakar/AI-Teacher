import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function RRB() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span"> RRB NTPC</Typography>
          </AccordionSummary>
          <AccordionDetails>
            RRB Non-Technical Popular Categories (NTPC): Recruits graduates for
            various non-technical posts like Commercial Apprentice, Station
            Master, etc. Involves multiple stages including CBTs, typing tests,
            and aptitude tests.
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
            <Typography component="span"> RRB ALP</Typography>
          </AccordionSummary>
          <AccordionDetails>
            RRB Assistant Loco Pilot (ALP): Recruits candidates for the post of
            Assistant Loco Pilot and Technicians. Includes CBTs, aptitude tests,
            and document verification.
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
            <Typography component="span"> RRB JE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            RRB Junior Engineer (JE): Recruits diploma/degree holders in
            engineering for Junior Engineer positions. The exam tests technical
            knowledge in the respective engineering field and includes CBTs.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default RRB;
