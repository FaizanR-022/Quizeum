import { Button, Typography, styled } from "@mui/material";
import bgImg from "../assets/Herobg3.jpg";

const MainHeading = styled(Typography)(({ theme, ...props }) => ({
  font: "500 90px Play fair display",
  color: theme.palette.primary.text,
  letterSpacing: "5px",
}));

const ModuleHeading = styled(Typography)(({ theme, ...props }) => ({
  font: "500 75px Play fair display",
  color: theme.palette.primary.text,
  letterSpacing: "5px",
}));

const Overlay = styled("div")(({ theme, ...props }) => ({
  backgroundColor: "rgba(0, 0,0,0.9)",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
}));

const ProgramContainer = styled("div")(() => ({
  display: "flex",
  gap: "50px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
}));

const BackgroundLayer = styled("div")(() => ({
  backgroundColor: "#000",
}));

// Button for next question in Quiz
const NextBtn = styled(Button)(({ theme, ...props }) => ({
  marginRight: "20px",
  color: theme.palette.primary.text,
  backgroundColor: theme.palette.primary.main,
  padding: "8px 20px",
  transition: "all 0.3s ease",

  "&: hover": {
    backgroundColor: theme.palette.primary.orange,
  },

  "&: disabled": {
    backgroundColor: "transparent",
  },
}));

// Quiz Modules components

const Wrapper = styled("div")(({ theme, ...props }) => ({
  backgroundColor: "#000",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const HeroBox = styled("div")(({ theme, ...props }) => ({
  height: "85%",
  width: "80%",
  borderRadius: "15px",
  backgroundColor: theme.palette.primary.darkOrange,
  padding: "20px 0",
  display: "block",
  textAlign: "center",
}));

export {
  MainHeading,
  Overlay,
  ProgramContainer,
  ModuleHeading,
  BackgroundLayer,
  NextBtn,
  Wrapper,
  HeroBox,
};
