import { Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Heading = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.orange,
  paddingBottom: "10px",
  ...(props.homePage
    ? {
        font: "700 60px Raleway",
      }
    : {
        font: "700 50px Raleway",
      }),
}));

const Box = styled("div")(({ theme, ...props }) => ({
  backgroundColor: theme.palette.primary.bgBlue,
  textAlign: "left",
  transition: "all 0.2s ease",
  cursor: "pointer",

  ...(props.homePage
    ? {
        border: `2px solid ${theme.palette.primary.darkOrange}`,
        borderRadius: "10px",
        width: "40%",
        height: "160px",
        padding: "20px 15px 12px 20px",
        boxShadow: `${theme.palette.primary.darkOrange} 0px -50px 36px -28px 
    inset`,
        "&: hover": {
          border: `3px solid ${theme.palette.primary.orange}`,
        },
      }
    : {
        border: `2px solid ${theme.palette.primary.orange}`,
        borderRadius: "7px",
        width: "32%",
        height: "130px",
        padding: "15px 11px 7px 15px",
        boxShadow: `${theme.palette.primary.orange} 0px -46px 30px -34px 
      inset`,
        "&: hover": {
          border: `3px solid ${theme.palette.primary.text}`,
        },
      }),

  "& a": {
    textDecoration: "none",
  },
}));

const Content = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  font: "400 22px Poppins",
  ...(props.homePage
    ? {
        font: "400 22px Poppins",
      }
    : {
        font: "400 17px Poppins",
      }),
}));

const ProgramsBox = ({ Title, Text, homePage = true, ...props }) => {
  return (
    <Box homePage={homePage} sx={props.sx} onClick={props.onClick}>
      {/* <Link> */}
      <Heading homePage={homePage}>{Title}</Heading>
      <Content homePage={homePage}>{Text ? Text : null}</Content>
      {/* </Link> */}
    </Box>
  );
};

export default ProgramsBox;
