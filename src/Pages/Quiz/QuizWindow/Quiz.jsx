import { useDispatch, useSelector } from "react-redux";
import { setData } from "./QuestionsSlice";
import { useEffect, useState } from "react";
import { handleQuery } from "./helper";
import { HeroBox, Wrapper } from "../FirstWindow/styled";
import { ModuleHeading, Overlay } from "../../../Global/styled";
import Divider from "../../../Global/Divider";
import { Question } from "./styled";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Quiz() {
  const dispatch = useDispatch();
  const activeProgram = useSelector((state) => state.info.program);
  const activeLevel = useSelector((state) => state.info.level);
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    console.log("hello");
    handleQuery(dispatch, activeProgram, activeLevel);
  }, []);

  const data = useSelector((state) => state.questions);
  return (
    <Wrapper>
      <Overlay>
        <HeroBox>
          {/* Testing 9/15 */}
          <ModuleHeading> 1/5</ModuleHeading>
          <Divider />
          <Box sx={{ textAlign: "left", padding: "80px 100px" }}>
            <Question>✦&nbsp;&nbsp;How many days are in a week?</Question>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              orientation="vertical"
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="web">A</ToggleButton>
              <h2>Option A</h2>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {data.map((obj) => obj.name)}
        </HeroBox>
      </Overlay>
    </Wrapper>
  );
}
