import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function CHSL() {
  return (
    <div>
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
    Combined Graduate Level Examination (CGL):  Recruits graduates for various Group B and C posts in different government ministries and departments.  A multi-stage exam covering quantitative aptitude, reasoning, English, and general awareness.

    </AccordionDetails>
  </Accordion>
  </div>
</div>
  )
}

export default CHSL