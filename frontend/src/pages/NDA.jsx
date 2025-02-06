import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function NDA() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">NDA EXAM</Typography>
          </AccordionSummary>
          <AccordionDetails>
            NDA Exam: Conducted by UPSC, it's a national-level exam for
            admission to the Army, Navy, and Air Force wings of the NDA. It
            involves a written exam and a Services Selection Board
            (SSB) interview.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default NDA;
