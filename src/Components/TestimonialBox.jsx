import * as React from "react";
import { styled } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Text = styled(Typography)(({ theme, ...props }) => ({
  font: "200 20px Poppins",
  color: theme.palette.primary.text,
  paddingBottom: "50px",
  textAlign: "left",
}));

const Name = styled(Typography)(({ theme, ...props }) => ({
  font: "700 40px Raleway",
  color: theme.palette.primary.orange,
  textAlign: "left",
}));

const style = {
  display: "block",
  maxWidth: "45%",
  padding: "0 10px 0 35px",

  "& button, button:disabled": {
    color: "white",
    fontSize: "15px",
    padding: "0px",
  },

  "& .MuiMobileStepper-dot": {
    backgroundColor: (theme) => theme.palette.primary.darkOrange,
    width: "8px",
  },

  "& .MuiMobileStepper-dotActive": {
    backgroundColor: (theme) => theme.palette.primary.orange,
  },
};

function TestimonialBox({ content }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = content.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={style}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 350,
          pl: 2,
          bgcolor: "primary.text",
        }}
      >
        <Typography>{content[activeStep].text}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {content.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              //   <Box
              //     component="img"
              //     sx={{
              //       height: 255,
              //       display: "block",
              //       maxWidth: 400,
              //       overflow: "hidden",
              //       width: "100%",
              //     }}
              //     src={step.imgPath}
              //     alt={step.label}
              //   />
              <>
                <Text>{step.text}</Text>
                <Name>- {step.name}</Name>{" "}
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          marginTop: "40px",
          backgroundColor: "rgba(0,0,0,0)",
          border: (theme) => `3px solid ${theme.palette.primary.darkOrange}`,
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default TestimonialBox;
