import { Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Heading = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.orange,
  paddingBottom: "10px",
  ...(props.homepage
    ? {
        font: "700 50px Raleway",
      }
    : {
        paddingBottom: "8px",
        font: "700 45px Raleway",
      }),
}));

const Box = styled("div")(({ theme, ...props }) => ({
  backgroundColor: theme.palette.primary.bgBlue,
  textAlign: "left",
  transition: "all 0.2s ease",
  cursor: "pointer",

  ...(props.homepage
    ? {
        border: `2px solid ${theme.palette.primary.darkOrange}`,
        borderRadius: "10px",
        width: "35%",
        height: "130px",
        padding: "20px 15px 12px 20px",
        boxShadow: `${theme.palette.primary.darkOrange} 0px -48px 34px -30px 
    inset`,
        "&: hover": {
          border: `2px solid ${theme.palette.primary.orange}`,
        },
      }
    : {
        border: `2px solid ${theme.palette.primary.orange}`,
        borderRadius: "7px",
        width: "32%",
        height: "115px",
        padding: "15px 11px 7px 15px",
        boxShadow: `${theme.palette.primary.orange} 0px -46px 30px -34px 
      inset`,
        "&: hover": {
          border: `2px solid ${theme.palette.primary.text}`,
        },
      }),

  "& a": {
    textDecoration: "none",
  },
}));

const Content = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  ...(props.homepage
    ? {
        font: "400 18px Poppins",
      }
    : {
        font: "400 15px Poppins",
      }),
}));

const ProgramsBox = ({ Title, Text, homepage = true, ...props }) => {
  return (
    <Box homepage={homepage} sx={props.sx} onClick={props.onClick}>
      {/* <Link> */}
      <Heading homepage={homepage}>{Title}</Heading>
      <Content homepage={homepage}>{Text ? Text : null}</Content>
      {/* </Link> */}
    </Box>
  );
};

export default ProgramsBox;
