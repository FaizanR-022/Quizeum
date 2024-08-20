import { Button, Typography, styled } from "@mui/material";
import BgImg from "../../../assets/Herobg3.jpg";
import Bg from "../../../assets/5570852.jpg";
import Bg2 from "../../../assets/featureBg.jpg";

const SectionWrapper = styled("div")(() => ({
  display: "block",
  backgroundImage: `url(${BgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const BgImage = styled("div")(() => ({
  backgroundColor: "rgba(0, 0,0,0.9)",
  display: "flex",
  height: "750px",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "80px",
  paddingBottom: "100px",
}));

const HeroBox = styled("div")(({ theme, ...props }) => ({
  height: "80%",
  width: "80%",
  borderRadius: "15px",
  backgroundColor: theme.palette.primary.HeroBg,
  padding: "0 40px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const TextSection = styled("div")(({ theme, ...props }) => ({
  color: theme.palette.primary.text,
  alignContent: "center",
  // padding: "0 140px 0 0",
  width: "50%",
}));

const ImageSection = styled("div")(() => ({
  width: "35%",
}));
const Image = styled("img")(() => ({
  height: "560px",
  paddingBottom: "40px",
}));

const SubHeading = styled(Typography)(({ theme, ...props }) => ({
  font: "18px Verdana",
  lineHeight: "32px",
  letterSpacing: "2px",
  paddingBottom: "50px",
}));

const CTAbtn = styled(Button)(({ theme, ...props }) => ({
  font: "600 17px Raleway",
  padding: "10px",
  margin: "15px 0",
  // borderRadius: "25px",
  backgroundColor: theme.palette.primary.orange,
  color: theme.palette.primary.text,
  letterSpacing: "3px",
  border: `3px solid ${theme.palette.primary.orange}`,
  transition: "all 0.3s ease",

  "&: hover": {
    backgroundColor: theme.palette.primary.darkOrange,
    border: `3px solid ${theme.palette.primary.orange}`,
  },
}));
export {
  SectionWrapper,
  BgImage,
  HeroBox,
  TextSection,
  ImageSection,
  Image,
  SubHeading,
  CTAbtn,
};
