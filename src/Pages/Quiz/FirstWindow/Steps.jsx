import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Wrapper, HeroBox } from "../../../Global/styled";
import { BackgroundLayer, NextBtn, Overlay } from "../../../Global/styled";
import ChooseProgram from "./Screens/ChooseProgram";
import ChooseLevels from "./Screens/ChooseLevels";
import Instructions from "./Screens/Instructions";
import SwipeableViews from "react-swipeable-views";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { motionFade, motionSlide } from "../../../Global/motionStyling";
import BackgroundLayers from "../BackgroundLayers";
import { Overlaysx } from "../QuizWindow/styled";

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
    <BackgroundLayers motionType={motionSlide} Overlaysx={Overlaysx}>
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            pb: "10px",
            "& svg": {
              width: "0.85em",
              height: "0.85em",
            },
          }}
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
            <NextBtn
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Start
            </NextBtn>
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
    </BackgroundLayers>
  );
}
