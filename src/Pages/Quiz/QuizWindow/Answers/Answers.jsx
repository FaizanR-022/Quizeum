import { useSelector } from "react-redux";
import BackgroundLayers from "../../BackgroundLayers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motionFade } from "../../../../Global/motionStyling";
import { Overlaysx } from "../styled";
import { ModuleHeading } from "../../../../Global/styled";
import Divider from "../../../../Global/Divider";

const HeroBoxsx = {
  minHeight: "85vh",
};

const Title = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.orange,
  font: "700 22px Raleway",
}));

const Text = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  font: "300 17px Poppins",
  letterSpacing: "1.5px",
  textAlign: "left",
  padding: "5px 0",
}));

export default function Answers() {
  const data = useSelector((state) => state.questions);
  const theme = useTheme();

  const style = {
    backgroundColor: theme.palette.primary.bgBlue,
    mb: "40px",
    // boxShadow: "rgba(0, 0, 0, 0.45) 0px 45px 30px -20px",
  };

  if (!data) {
    return (
      <BackgroundLayers>
        <ModuleHeading>No Data</ModuleHeading>
      </BackgroundLayers>
    );
  }
  return (
    <BackgroundLayers
      motionType={motionFade}
      Overlaysx={Overlaysx}
      HeroBoxsx={HeroBoxsx}
    >
      <ModuleHeading>Answers</ModuleHeading>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          padding: "60px 0",
        }}
      >
        <Box sx={{ width: "80%" }}>
          {data.map((subject) => (
            <Accordion sx={style}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "primary.text" }} />}
              >
                <Title>{subject.name}</Title>
              </AccordionSummary>
              <AccordionDetails sx={{ pl: "40px" }}>
                {subject.content.map((question, idx) => (
                  <>
                    <Text>
                      {idx < 9 ? "0" + (idx + 1) : idx + 1}. {question.question}
                    </Text>
                    <Text sx={{ pb: "30px" }}>({question.correct_option})</Text>
                  </>
                ))}

                {/* <Text>01. What is the graph of x cube? (Parabola)</Text> */}
              </AccordionDetails>
            </Accordion>
          ))}

          {/* <Accordion sx={style}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.text" }} />}
            >
              <Title>Advance Maths</Title>
            </AccordionSummary>
            <AccordionDetails sx={{ pl: "40px" }}>
              <Text>01. What is the graph of x cube? (Parabola)</Text>
              <Text>01. What is the graph of x cube? (Parabola)</Text>
            </AccordionDetails>
          </Accordion> */}
        </Box>
      </Box>
    </BackgroundLayers>
  );
}
