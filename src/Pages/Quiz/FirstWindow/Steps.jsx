import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Wrapper, HeroBox } from "./styled";
import { Overlay } from "../../../Global/styled";
import ChooseProgram from "./ChooseProgram";
import ChooseLevels from "./ChooseLevels";
import Instructions from "./Instructions";
import SwipeableViews from "react-swipeable-views";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const steps = ["Programs", "Levels", "Instructions"];
const pages = [<ChooseProgram />, <ChooseLevels />, <Instructions />];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);
  const activeProgram = useSelector((state) => state.info.program);
  const activeLevel = useSelector((state) => state.info.level);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleActive = (step) => {
    setActiveStep(step);
  };

  const disableNext = () => {
    if (activeStep === 0) {
      return activeProgram ? false : true;
    } else if (activeStep === 1) {
      return activeLevel ? false : true;
    } else {
      return false;
    }
  };

  return (
    <Wrapper>
      <Overlay>
        <HeroBox>
          <Box sx={{ width: "100%" }}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{ pb: "15px" }}
            >
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}></StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <SwipeableViews
              index={activeStep}
              onChangeIndex={handleActive}
              axis="x"
            >
              {pages.map((page, index) => {
                return Math.abs(activeStep - index) <= 2 ? page : null;
              })}
            </SwipeableViews>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  ml: "20px",
                  mr: 1,
                  color: "primary.text",
                }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={() => {
                    navigate("/quiz");
                  }}
                  sx={{
                    mr: "20px",
                    color: "primary.text",
                    backgroundColor: "primary.main",
                    padding: "8px 20px",

                    "&: hover": {
                      backgroundColor: "primary.orange",
                    },
                  }}
                >
                  Start
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={disableNext()}
                  sx={{
                    mr: "20px",
                    color: "primary.text",
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </HeroBox>
      </Overlay>
    </Wrapper>
  );
}
