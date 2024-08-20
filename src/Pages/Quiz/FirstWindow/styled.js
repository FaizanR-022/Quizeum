import { styled } from "@mui/material";

const activeStyle = {
  border: (theme) => `2px solid ${theme.palette.primary.text}`,
};

// Box heights of steps
const boxHeight = {
  maxHeight: "50vh",
  pt: "40px",
};

export { activeStyle, boxHeight };
