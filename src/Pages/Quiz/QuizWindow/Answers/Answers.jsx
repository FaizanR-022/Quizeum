import { useSelector } from "react-redux";
import BackgroundLayers from "../../BackgroundLayers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motionFade } from "../../../../Global/motionStyling";
import { Overlaysx } from "../styled";

export default function Answers() {
  const data = useSelector((state) => state.questions);
  return (
    <BackgroundLayers motionType={motionFade} Overlaysx={Overlaysx}>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </BackgroundLayers>
  );
}
