import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function JEE() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">JEE MAIN</Typography>
          </AccordionSummary>
          <AccordionDetails>
            JEE Main: This serves as a screening test for JEE Advanced and for
            admission to NITs, IIITs, and other engineering colleges. It
            assesses knowledge in Physics, Chemistry, and Mathematics.
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
            <Typography component="span"> JEE ADVANCE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            JEE Advanced: This is the final exam for admission to the Indian
            Institutes of Technology (IITs). Only those who qualify in JEE Main
            are eligible to appear for JEE Advanced, which is known for its
            challenging questions.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default JEE;
