import { styled, Typography } from "@mui/material";

export const Question = styled(Typography)(({ theme, ...props }) => ({
  font: "500 21px Poppins",
  letterSpacing: "1.3px",
}));

// For Result & Answer window
export const Overlaysx = {
  minHeight: "97vh",
  height: "min-content",
  pb: "4vh",
};
