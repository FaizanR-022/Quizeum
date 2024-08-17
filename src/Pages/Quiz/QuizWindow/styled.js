import { styled, Typography } from "@mui/material";

export const Question = styled(Typography)(({ theme, ...props }) => ({
  font: "500 25px Poppins",
  letterSpacing: "1.3px",
}));

export const Overlaysx = {
  minHeight: "100vh",
  height: "min-content",
  padding: "4vh 0",
};
