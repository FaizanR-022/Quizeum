import { Typography, styled } from "@mui/material";

const MainHeading = styled(Typography)(({ theme, ...props }) => ({
  font: "500 90px Play fair display",
  color: theme.palette.primary.text,
  letterSpacing: "5px",
}));

export { MainHeading };
