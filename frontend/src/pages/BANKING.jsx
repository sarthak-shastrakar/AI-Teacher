import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function BANKING() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span"> IBPS PO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            IBPS PO (Probationary Officer): Recruits graduates for entry-level
            officer positions in public sector banks. A multi-stage process
            involving prelims, mains, and interviews.
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
            <Typography component="span"> IBPS CLEARK</Typography>
          </AccordionSummary>
          <AccordionDetails>
            IBPS Clerk: Recruits graduates for clerical positions in public
            sector banks. Typically involves a prelims and mains exam.
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
            <Typography component="span"> SBI PO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            SBI PO (Probationary Officer): Recruits graduates for officer
            positions specifically in State Bank of India. Similar selection
            process to IBPS PO.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default BANKING;
