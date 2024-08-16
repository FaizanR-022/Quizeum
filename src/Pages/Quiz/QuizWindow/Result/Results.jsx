import { useTheme } from "@emotion/react";
import BackgroundLayers from "../../BackgroundLayers";
import { motionFade } from "../../../../Global/motionStyling";
import { useSelector } from "react-redux";
import { generateResult } from "./helper";
import { ModuleHeading } from "../../../../Global/styled";
import Divider from "../../../../Global/Divider";
import { Box, Stack } from "@mui/material";
import SinglePieChart from "../../../../Components/SinglePieChart";

export default function Results() {
  const theme = useTheme();
  const data = useSelector((state) => state.questions);
  const results = generateResult(data);

  return (
    <BackgroundLayers motionType={motionFade}>
      <ModuleHeading>Result</ModuleHeading>
      <Divider />
      <Box>
        <Stack direction="row" width="100%" textAlign="center">
          {results.map((result) => (
            // <Box>
            <SinglePieChart result={result} />
            // </Box>
          ))}
        </Stack>
      </Box>
    </BackgroundLayers>
  );
}
