import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Wrapper, HeroBox } from "./styled";
import { Overlay } from "../../../Global/styled";
import ChooseProgram from "./ChooseProgram";
import ChooseLevels from "./ChooseLevels";

const steps = ["Programs", "Levels", "Instructions"];
const pages = [<ChooseProgram />, <ChooseLevels />, null];

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
            {activeStep === steps.length ? (
              <>
                {/* content */}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </>
            ) : (
              <>
                {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                {pages[activeStep]}
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
                  <Button
                    onClick={handleNext}
                    // disabled={}
                    sx={{
                      mr: "20px",
                      color: "primary.text",
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Start" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </HeroBox>
      </Overlay>
    </Wrapper>
  );
}
