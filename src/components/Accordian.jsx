import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionComponent() {
  return (
    <div style={{ width: "200px" }}>
      <Accordion
        onMouseEnter={(e) => e.currentTarget.setAttribute("open", "true")}
        onMouseLeave={(e) => e.currentTarget.removeAttribute("open")}
        disableGutters
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            Tab 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Option 1</Typography>
          <Typography>Option 2</Typography>
          <Typography>Option 3</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
