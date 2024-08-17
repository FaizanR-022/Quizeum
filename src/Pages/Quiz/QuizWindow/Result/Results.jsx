import { useTheme } from "@emotion/react";
import BackgroundLayers from "../../BackgroundLayers";
import { motionFade } from "../../../../Global/motionStyling";
import { useSelector } from "react-redux";
import { generateResult } from "./helper";
import { ModuleHeading } from "../../../../Global/styled";
import Divider from "../../../../Global/Divider";
import { Box, Stack } from "@mui/material";
import SinglePieChart from "../../../../Components/SinglePieChart";
import ResultTable from "../../../../Components/ResultTable";
import { Overlaysx } from "../styled";

const Message = (pts, total) => {
  const perc = (pts / total) * 100;

  if (perc > 80) {
    return "Excellent!😀";
  } else if (perc > 60) {
    return "Good effort!🙂";
  } else {
    return "Need Improvement!🙁";
  }
};

export default function Results() {
  const theme = useTheme();
  const data = useSelector((state) => state.questions);
  const results = generateResult(data);
  const Totalpts = () => {
    let pts = 0;
    results.forEach((result) => {
      pts += result.points;
    });

    return pts;
  };

  const textStyle = {
    font: "500 40px Poppins",
    pt: "30px",
  };

  return (
    <BackgroundLayers motionType={motionFade} Overlaysx={Overlaysx}>
      <ModuleHeading>Result</ModuleHeading>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          padding: "5px 70px",
        }}
      >
        <Stack
          direction="row"
          width="100%"
          textAlign="center"
          sx={{ padding: "60px 0 " }}
        >
          {results.map((result) => (
            // <Box>
            <SinglePieChart result={result} />
            // </Box>
          ))}
        </Stack>
        <ResultTable results={results} />
        <ModuleHeading sx={textStyle}>
          Score: {Totalpts()}/{results.length * 15}
        </ModuleHeading>
        <ModuleHeading sx={textStyle}>
          {Message(Totalpts(), results.length * 15)}
        </ModuleHeading>
      </Box>
    </BackgroundLayers>
  );
}
