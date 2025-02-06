import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function NEET() {
  return (
    <div className="contents">
      <div class="carding">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">NNET (UG)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            NEET (UG): A national-level entrance exam for admission to
            undergraduate medical (MBBS, BDS, AYUSH) and veterinary courses in
            India. It's conducted by the National Testing Agency (NTA).
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default NEET;
