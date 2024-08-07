import { styled } from "@mui/material";

const activeStyle = {
  border: (theme) => `3px solid ${theme.palette.primary.text}`,
};

// Box heights of steps
const boxHeight = {
  maxHeight: "50vh",
  pt: "60px",
};

export { activeStyle, boxHeight };
