import { styled, Typography } from "@mui/material";

const Question = styled(Typography)(({ theme, ...props }) => ({
  font: "500 30px Poppins",
  color: theme.palette.primary.text,
  letterSpacing: "1.3px",
}));

const optionsBox = styled("div")(({ theme, ...props }) => ({
  // display: "inline-flex"
  display: "inline-block",
}));

export { Question };
