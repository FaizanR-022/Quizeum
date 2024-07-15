import { Typography, styled } from "@mui/material";

const Style = styled(Typography)(({ theme, ...props }) => ({
  font: "900 20px Verdana",
  color: theme.palette.primary.orange,
}));

export default function Divider() {
  return <Style> ______</Style>;
}
