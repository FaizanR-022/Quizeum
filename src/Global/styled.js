import { Typography, styled } from "@mui/material";

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

export { MainHeading, Overlay, ProgramContainer, ModuleHeading };
