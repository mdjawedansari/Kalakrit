"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion({ faq }) {
  return (
    <>
      <div className="w-full border ">
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-[#eb5a00]" />}
                aria-controls="panel1a-content"
                className="bg-[#201f22] text-[#ffffff]"
                id="panel1a-header"
              >
                <Typography className="font-light" >{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography >{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
    </>
  );
}