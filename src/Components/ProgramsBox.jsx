import { styled, Typography } from "@mui/material";
import icon from "../assets/book-solid.svg";

const Heading = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.orange,
  font: "700 60px Raleway",
  paddingBottom: "10px",
}));

const Box = styled("div")(({ theme, ...props }) => ({
  backgroundColor: theme.palette.primary.bgBlue,
  width: "40%",
  textAlign: "left",
  height: "160px",
  borderRadius: "10px",
  padding: "20px 15px 12px 20px",
  border: `2px solid ${theme.palette.primary.darkOrange}`,
  boxShadow: `${theme.palette.primary.darkOrange} 0px -50px 36px -28px 
  inset`,
  transition: "all 0.5s ease",

  "&: hover": {
    cursor: "pointer",
    height: "190px",
    width: "41%",
  },

  // "& a": {
  //   textDecoration: "none",
  // },
}));

const Content = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  font: "400 22px Poppins",
}));

const ProgramsBox = ({ Title, Text, ...props }) => {
  return (
    <Box>
      {/* <a href="www.google.com"> */}
      <Heading>{Title}</Heading>
      <Content>{Text}</Content>
      {/* </a> */}
    </Box>
  );
};

export default ProgramsBox;
