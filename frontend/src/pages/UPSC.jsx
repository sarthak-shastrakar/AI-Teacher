import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function UPSC() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">CSE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Civil Services Examination (CSE): Recruits candidates for top
            administrative posts like IAS, IPS, IFS, etc. A three-stage process
            involving prelims, mains, and a personal interview.
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
            <Typography component="span"> ESE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Engineering Services Examination (ESE): Recruits engineers for
            various engineering services in the government. Involves a written
            exam and a personality test.
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
            <Typography component="span"> CDS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Combined Defence Services Examination (CDS): Recruits candidates for
            admission to various defence academies. Includes a written exam and
            an SSB interview.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default UPSC;
